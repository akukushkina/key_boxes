const key = document.querySelector('.key');

window.addEventListener('keydown', (e) => {
    key.innerHTML = ` 
    <span class="key__btn">
    ${e.key === ' ' ? 'Space' : e.key}
    <i>event.key</i>
    </span>
    <span class="key__code">
    ${e.keyCode}
    <i>event.keyCode</i>
    </span>
    <span class="key__event">
    ${e.code}
    <i>event.code</i>
    </span>`
})