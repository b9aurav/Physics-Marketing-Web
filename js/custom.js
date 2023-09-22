var param = {
    "param": {
        "type": 'web_popup'
    }
}

async function getData() {
    const popup = await fetch('https://portal.physicsmarketing.online/api/GetGeneralSettings', {
        method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        body: JSON.stringify(param),
    })
    const popupData = await popup.json();
    if (popupData.data[0].status) {
        document.getElementById('message').value = popupData.data[0].message
        $('.modal').modal('toggle')
    }
    
    param = {
        "param": {
            "type": 'web_news'
        }
    }
    const news = await fetch('https://portal.physicsmarketing.online/api/GetGeneralSettings', {
        method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        body: JSON.stringify(param),
    })
    const newsData = await news.json();
    if (newsData.data[0].status) {
        document.getElementById('news-text').innerText = newsData.data[0].message   
    } else {
        document.getElementById('news_section').style.display = 'none'
    }
}

getData();