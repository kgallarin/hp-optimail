<template>
    <li class="questions-list-item">
       <div class="question-item-wrapper">
           <font-awesome-icon :icon="['fas', 'question-circle']" size="lg" class="question-item-icon" />
           <div class="question-item-content">
               <p class="question-item-header">How long do payouts take?</p>

               <p class="question-item-body">
                   Once you’re set up, payouts arrive in your bank account on a 2-day rolling basis. Or you can opt to receive payouts weekly or monthly. 
                   <a href="#" class="question-item-link gold-link">Read more</a>
               </p>
           </div>
       </div>
    </li>
</template>
<script>
export default {
    name: 'QuestionItem'
}
</script>