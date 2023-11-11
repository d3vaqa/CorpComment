
// Counter Component

const textareaEL = document.querySelector('.form__textarea');
const counterEL = document.querySelector('.counter');
const feedbackEL = document.querySelector('.feedbacks');
const submitEL = document.querySelector('.submit-btn');
const maxLength = 150;




// utilities

const showVisualIndicator = (textCheck) => {
    const className = textCheck === 'form--valid' ? 'form--valid' : 'form--invalid';
    form.classList.add(className);
    setTimeout(() => {
        form.classList.remove(className);
    }, 3000);
    textareaEL.focus();    
    return // stop the execution if the form data is invali
}





textareaEL.addEventListener('input', () => {
        const currentLength = textareaEL.value.length;
        const remainingChars = maxLength - currentLength;

        
        if (currentLength >= maxLength) {
                textareaEL.value = textareaEL.value.slice(0, maxLength);
                counterEL.textContent = `0`;
                counterEL.textContent = `You have reached the maximum character limit of ${maxLength}.`;
                counterEL.style.color = 'red'; 
        } else {
                counterEL.textContent = `${remainingChars}`;
                counterEL.style.color = ''; // reset the color
        }
});


// Form Component
const form = document.querySelector('.form');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // prevent the default form submission behavior
    const formData = textareaEL.value 

  // Validate the form data
  if (!formData.includes('#') || formData.length <= 10) {
    showVisualIndicator('form--invalid')
    
  }else{
    showVisualIndicator('form--valid')
  }


  console.log(formData); // log the form data to the console


// extra the hashtag from the form data
  const hashtag = formData.match(/#\w+/g);

  if(hashtag.length > 0){
    const company = hashtag[0].substring(1)
    const badge = hashtag[0].charAt(1)
    const upvoteCount = 0
    const daysAgo = 0;
    console.log(badge)
    console.log(company);


    const feebackHTML = 
    ` 
    <li class="feedback">
        <button class="upvote">
            <i class="fa-solid fa-caret-up up__icon"></i>
            <span class="up__count">${upvoteCount}</span>
        </button>

        <section class="feedback__badge">
            <p class="feedback__letter">${badge}</p>
        </section>

        <div class="feedback__content">
            <p class="feedback__company">${company}</p>
            <p class="feedback__text">${formData}</p>
        </div>
        <p class="feedback__days">${daysAgo === 0 ? 'New' : `${daysAgo}d`} </p>
    
    </li>   
    `


    feedbackEL.insertAdjacentHTML('beforeend', feebackHTML)

  }


 console.log(hashtag); // log the hashtag to the console







// another way to extract the hashtag from the form data
    // const AnothrHashtag = formData.split(' ').filter(word => word.startsWith('#'));
    // console.log(AnothrHashtag)

// 3rd way to extract the hashtag from the form data
    // const justAnotherdHashtag = formData.split(' ').find( word => word.includes('#'))
    // console.log(justAnotherdHashtag)
  textareaEL.value = '';
  textareaEL.focus();    
//   submitEL.blur()
  counterEL.textContent = maxLength;
});

