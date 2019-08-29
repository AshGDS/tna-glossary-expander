/* Takes the title of a glossary term, and splits it by the first instance of 'charge',
and then creates more meaningful added text for the glossary term.

The splitting is done in order to make the innerText be dynamic (e.g. if one research guide says
'There may be a charge' and one says 'There will be a charge' it can work for both of those glossary terms.

*/


let glossary_terms = document.querySelectorAll('.research-guide-glossary-term');

glossary_terms.forEach((term) => {

    if(term.innerText === '£') {

        term.classList.add('glossary-expand');

        let first_sentence =  term.title.split('charge')[0];

        term.innerText = first_sentence + ' charge.';

        term.addEventListener('click',  (e) => {
            window.alert(term.title);
        })

    }

});
