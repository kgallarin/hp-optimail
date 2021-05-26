<template>
    <div class="qa-section">
        <ul class="questions-list-ul">
            <question-item />
            <question-item />
            <question-item />
            <question-item />
        </ul>
    </div>
</template>
<script>
import QuestionItem from './QuestionItem'
export default {
    name: 'QuestionsList',
    components: {
        QuestionItem
    }
}
</script>