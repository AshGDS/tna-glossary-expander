let glossary_terms = document.querySelectorAll('.research-guide-glossary-term');

glossary_terms.forEach((term) => {

    if(term.innerText === '£') {

        term.classList.add('glossary-expand');

        // let first_sentence =  term.title.split('.')[0];

        let first_sentence =  'There will be a charge';

        term.innerText = first_sentence;

        term.addEventListener('click',  (e) => {
            window.alert(term.title);
        })

    }

});
