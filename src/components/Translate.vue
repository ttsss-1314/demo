<script setup>
import { ref, computed } from 'vue'
import { translateText } from "../utils/HelloWorldRequest";
import { ElMessage } from 'element-plus'

// 状态管理
const inputText = ref('hello world')
const loading = ref(false)
const translationResult = ref('')
const errorMessage = ref('')

// 计算属性
const hasResult = computed(() => translationResult.value && !errorMessage.value)

// 翻译函数
const handleTranslate = async () => {
  if (!inputText.value.trim()) {
    ElMessage.warning('请输入要翻译的文本')
    return
  }

  loading.value = true
  errorMessage.value = ''
  translationResult.value = ''

  try {
    const response = await translateText({
      q: inputText.value,
      from: 'en',
      to: 'zh'
    })

    console.log('完整响应:', response)

    if (response.data && response.data.trans_result) {
      translationResult.value = response.data.trans_result
          .map(item => item.dst)
          .join('\n')
      ElMessage.success('翻译成功')
    } else if (response.data.error_msg) {
      throw new Error(response.data.error_msg)
    } else {
      throw new Error('翻译失败，未知错误')
    }
  } catch (error) {
    console.error('翻译出错:', error)
    errorMessage.value = error.message || '翻译失败，请检查网络和配置'
    ElMessage.error('翻译失败')
  } finally {
    loading.value = false
  }
}

// 清空函数
const handleClear = () => {
  inputText.value = ''
  translationResult.value = ''
  errorMessage.value = ''
}
</script>

<template>
  <div class="translation-app">
    <h2 style="margin-bottom: 20px;">百度翻译</h2>

    <!-- 输入区域 -->
    <div class="input-section">
      <el-input
          v-model="inputText"
          type="textarea"
          :rows="6"
          placeholder="请输入要翻译的英文文本"
          @keyup.enter.native="handleTranslate"
      />

      <div class="button-group" style="margin-top: 20px;">
        <el-button
            type="primary"
            :loading="loading"
            @click="handleTranslate"
        >
          {{ loading ? '翻译中...' : '翻译' }}
        </el-button>

        <el-button @click="handleClear">
          清空
        </el-button>
      </div>
    </div>

    <!-- 结果区域 -->
    <div v-if="hasResult" class="result-section">
      <h3 style="color: #409eff;">翻译结果：</h3>
      <div class="result-content">
        <el-alert
            :title="translationResult"
            type="success"
            :closable="false"
            style="margin-top: 15px;"
        />
      </div>
    </div>

    <!-- 错误提示 -->
    <div v-if="errorMessage" class="error-section">
      <el-alert
          :title="errorMessage"
          type="error"
          show-icon
          style="margin-top: 20px;"
      />
    </div>

    <!-- 调试信息（开发时可用） -->
    <div v-if="false" class="debug-info">
      <h4>调试信息：</h4>
      <p>输入文本: {{ inputText }}</p>
      <p>加载状态: {{ loading }}</p>
      <p>错误信息: {{ errorMessage }}</p>
    </div>
  </div>
</template>

<style scoped>
.translation-app {
  max-width: 800px;
  margin: 0 auto;
  padding: 30px;
}

.input-section {
  margin-bottom: 30px;
}

.button-group {
  display: flex;
  gap: 15px;
}

.result-section {
  margin-top: 30px;
}

.result-content {
  margin-top: 15px;
}

.error-section {
  margin-top: 20px;
}

.debug-info {
  margin-top: 30px;
  padding: 15px;
  background-color: #f5f7fa;
  border-radius: 4px;
  font-size: 14px;
  color: #909399;
}
</style>