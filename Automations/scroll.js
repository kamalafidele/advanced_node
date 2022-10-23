async function autoScroll(page) {
    const evaluate =  await page.evaluate(async () => {
        return new Promise((resolve) => {
            let totalHeight = 0;
            let distance = 100;
            let timer = setInterval(() => {
                let scrollHeight = document.body.scrollHeight;
                window.scrollBy(0, distance);
                totalHeight += distance;

                if(totalHeight >= scrollHeight - window.innerHeight){
                    clearInterval(timer);
                    resolve({ height: totalHeight });
                }
            }, 300);
        });
    });

    return evaluate;
}

async function scrollToTop(page, height) {
    const evaluate = async (length) => {
        await page.evaluate(async () => { 
           return new Promise((resolve) => {
               let distance = -100;
               let scrollCount = length;
               let timer = setInterval(() => {
                   let scrollHeight = document.body.scrollHeight;
                   window.scrollBy(0, distance);
                   scrollCount += 100;

                   if(scrollCount >= scrollHeight - window.innerHeight) {
                       clearInterval(timer);
                       resolve();
                   } 
               }, 300);
           })
       });
    }

    return evaluate(height);
}

    module.exports = { autoScroll, scrollToTop };