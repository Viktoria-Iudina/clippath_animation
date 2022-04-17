        const tl = gsap.timeline({paused: true})
        const container = document.querySelector('.container')

        tl.to(container, {clipPath: 'polygon(0 0, 100% 0%, 100% 100%, 0 100%)'})
        tl.to(container, {clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)'}, '+=1')
        tl.to('h1', {color: 'white'})
        tl.to('.container2', {clipPath: 'polygon(0 0, 100% 0%, 100% 100%, 0 100%)'})

        container.addEventListener('mouseover', () => {
            tl.play()
        })
        