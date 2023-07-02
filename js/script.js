let doc = document
let selectColorBtnParent = doc.querySelector('.mac-colors')

let btnColorWhite = doc.querySelector('.white')
let btnColorSpaceGray = doc.querySelector('.space-gray')

let colorName = doc.querySelector('.mac-color')

let macPrice = doc.querySelector('.mac-price')

let macImgSilver = doc.querySelector('.img-mac-silver')
let macImgSpaceGray = doc.querySelector('.img-mac-space-gray')

let btnSsd512gb = doc.querySelector('.gb512')
let btnSsd1tb = doc.querySelector('.tb1')
let btnSsd2tb = doc.querySelector('.tb2')
let btnSsd4tb = doc.querySelector('.tb4')


btnColorSpaceGray.addEventListener('click', () => {
    let activeClass = btnColorSpaceGray.classList
    activeClass.forEach((item) => {
        if (item == 'btn-color-active') {
            activeClass = 'btn-color-active'
        }
    })

    btnColorSpaceGray.classList.add('btn-color-active')
    btnColorWhite.classList.remove('btn-color-active')

    if (activeClass != 'btn-color-active') {

        macImgSpaceGray.style.opacity = '1'
        macImgSpaceGray.style.position = 'static'
        macImgSpaceGray.style.zIndex = '1'
        macImgSilver.style.opacity = '0'
        macImgSilver.style.position = 'absolute'
        macImgSilver.style.zIndex = '-99'
        
        // macImg.style.animation = 'change-mac-img .4s ease-in-out'
        colorName.style.animation = 'change-color-name .4s ease-in-out'

        setTimeout(() => {
            colorName.innerText = 'Space Gray'

            // macImg.removeAttribute('src')
            // macImg.setAttribute('src', 'img/iMac_space_gray.png')
        }, 200);

        setTimeout(() => {
            // macImg.style.animation = ''
            colorName.style.animation = ''
        }, 400);
    }

})


btnColorWhite.addEventListener('click', () => {
    let activeClass = btnColorWhite.classList
    activeClass.forEach((item) => {
        if (item == 'btn-color-active') {
            activeClass = 'btn-color-active'
        }
    })

    btnColorWhite.classList.add('btn-color-active')
    btnColorSpaceGray.classList.remove('btn-color-active')

    if (activeClass != 'btn-color-active') {
        macImgSpaceGray.style.opacity = '0'
        macImgSpaceGray.style.position = 'absolute'
        macImgSpaceGray.style.zIndex = '-99'
        macImgSilver.style.opacity = '1'
        macImgSilver.style.position = 'static'
        macImgSilver.style.zIndex = '1'

        // macImg.style.animation = 'change-mac-img .4s ease-in-out'
        colorName.style.animation = 'change-color-name .4s ease-in-out'

        setTimeout(() => {
            colorName.innerText = 'White'

            // macImg.removeAttribute('src')
            // macImg.setAttribute('src', 'img/iMac_silver.png')
        }, 200);

        setTimeout(() => {
            // macImg.style.animation = ''
            colorName.style.animation = ''
        }, 400);
    }
})



btnSsd512gb.addEventListener('click', () => {

    let activeClass = btnSsd512gb.classList
    activeClass.forEach((item) => {
        if (item == 'btn-ssd-active') {
            activeClass = 'btn-ssd-active'
        }
    })

    btnSsd512gb.classList.add('btn-ssd-active')
    btnSsd1tb.classList.remove('btn-ssd-active')
    btnSsd2tb.classList.remove('btn-ssd-active')
    btnSsd4tb.classList.remove('btn-ssd-active')

    if (activeClass != 'btn-ssd-active') {
        macPrice.style.animation = 'change-price .4s ease-in-out'

        setTimeout(() => {
            macPrice.innerText = '$1,999'
        }, 200);

        setTimeout(() => {
            macPrice.style.animation = ''
        }, 400);
    }
})


btnSsd1tb.addEventListener('click', () => {

    let activeClass = btnSsd1tb.classList
    activeClass.forEach((item) => {
        if (item == 'btn-ssd-active') {
            activeClass = 'btn-ssd-active'
        }
    })

    btnSsd1tb.classList.add('btn-ssd-active')
    btnSsd512gb.classList.remove('btn-ssd-active')
    btnSsd2tb.classList.remove('btn-ssd-active')
    btnSsd4tb.classList.remove('btn-ssd-active')

    if (activeClass != 'btn-ssd-active') {
        macPrice.style.animation = 'change-price .4s ease-in-out'

        setTimeout(() => {
            macPrice.innerText = '$2,199'
        }, 200);

        setTimeout(() => {
            macPrice.style.animation = ''
        }, 400);
    }
})


btnSsd2tb.addEventListener('click', () => {

    let activeClass = btnSsd2tb.classList
    activeClass.forEach((item) => {
        if (item == 'btn-ssd-active') {
            activeClass = 'btn-ssd-active'
        }
    })

    btnSsd2tb.classList.add('btn-ssd-active')
    btnSsd512gb.classList.remove('btn-ssd-active')
    btnSsd1tb.classList.remove('btn-ssd-active')
    btnSsd4tb.classList.remove('btn-ssd-active')

    if (activeClass != 'btn-ssd-active') {
        macPrice.style.animation = 'change-price .4s ease-in-out'

        setTimeout(() => {
            macPrice.innerText = '$2,599'
        }, 200);

        setTimeout(() => {
            macPrice.style.animation = ''
        }, 400);
    }
})


btnSsd4tb.addEventListener('click', () => {

    let activeClass = btnSsd4tb.classList
    activeClass.forEach((item) => {
        if (item == 'btn-ssd-active') {
            activeClass = 'btn-ssd-active'
        }
    })

    btnSsd4tb.classList.add('btn-ssd-active')
    btnSsd512gb.classList.remove('btn-ssd-active')
    btnSsd1tb.classList.remove('btn-ssd-active')
    btnSsd2tb.classList.remove('btn-ssd-active')

    if (activeClass != 'btn-ssd-active') {
        macPrice.style.animation = 'change-price .4s ease-in-out'

        setTimeout(() => {
            macPrice.innerText = '$3,199'
        }, 200);

        setTimeout(() => {
            macPrice.style.animation = ''
        }, 400);
    }
})