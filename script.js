// 模拟新闻数据
const newsData = [
    {
        title: "人工智能技术突破性进展",
        description: "最新研究显示，AI 在自然语言处理领域取得重大突破，理解能力接近人类水平。",
        source: "商业新知",
        url: "https://www.msn.cn/zh-cn/news/other/%E6%99%AE%E8%9E%8D%E8%8A%B1-%E5%88%9B%E6%96%B0%E6%80%A7%E4%BA%BA%E5%B7%A5%E6%99%BA%E8%83%BD%E6%8A%80%E6%9C%AF%E6%B7%B1%E5%BA%A6%E8%A7%A3%E6%9E%90/ar-AA1FjPUy?cvid=4f0c03a1bfc34e81d71a6d2cd3a7ea83&ei=9"
    },
    {
        title: "全球气候变化最新报告",
        description: "联合国发布最新气候报告，呼吁各国采取更积极的减排措施。",
        source: "联合国",
        url: "https://www.un.org/zh/climatechange/reports"
    },
    {
        title: "数字经济新趋势",
        description: "区块链技术在金融领域的应用不断扩大，数字货币发展进入新阶段。",
        source: "人民网",
        url: "http://blockchain.people.com.cn/n1/2020/0518/c417685-31713485.html#:~:text=%E5%8A%A0%E5%BF%AB%E5%8C%BA%E5%9D%97%E9%93%BE%E6%8A%80%E6%9C%AF%E4%B8%8E%E4%BA%BA%E5%B7%A5%E6%99%BA%E8%83%BD%E3%80%81%E5%A4%A7%E6%95%B0%E6%8D%AE%E3%80%81%E7%89%A9%E8%81%94%E7%BD%91%E7%AD%89%E6%9C%80%E5%85%88%E8%BF%9B%E7%9A%84%E4%BF%A1%E6%81%AF%E6%8A%80%E6%9C%AF%E4%BB%A5%E5%8F%8A%E4%B8%8E%E5%AE%9E%E4%BD%93%E7%BB%8F%E6%B5%8E%E8%BF%9B%E8%A1%8C%E6%B7%B1%E5%BA%A6%E8%9E%8D%E5%90%88%EF%BC%8C%E5%88%9B%E6%96%B0%E8%A7%A3%E5%86%B3%E4%B8%AD%E5%B0%8F%E4%BC%81%E4%B8%9A%E8%B4%B7%E6%AC%BE%E8%9E%8D%E8%B5%84%E9%9A%BE%E3%80%81%E9%93%B6%E8%A1%8C%E9%A3%8E%E6%8E%A7%E9%9A%BE%E3%80%81%E9%83%A8%E9%97%A8%E7%9B%91%E7%AE%A1%E9%9A%BE%E7%9A%84%E2%80%9C%E4%B8%89%E9%9A%BE%E2%80%9D%E9%97%AE%E9%A2%98%E3%80%82,%E8%BF%99%E6%97%A0%E7%96%91%E5%B0%86%E5%8C%BA%E5%9D%97%E9%93%BE%E7%9A%84%E5%BA%94%E7%94%A8%E4%B8%8E%E5%88%9B%E6%96%B0%E5%8F%88%E6%8F%90%E5%8D%87%E5%88%B0%E4%B8%80%E4%B8%AA%E6%9B%B4%E6%96%B0%E7%9A%84%E9%AB%98%E5%BA%A6%EF%BC%8C%E6%8C%87%E6%98%8E%E4%BA%86%E8%BF%9B%E4%B8%80%E6%AD%A5%E5%8F%91%E5%B1%95%E7%9A%84%E6%96%B9%E5%90%91%E3%80%82%20%E5%8C%BA%E5%9D%97%E9%93%BE%E6%8A%80%E6%9C%AF%E7%BB%BC%E5%90%88%E4%BA%86%E6%95%B0%E5%AD%A6%E3%80%81%E5%AF%86%E7%A0%81%E5%AD%A6%E7%AD%89%E5%A4%9A%E5%AD%A6%E7%A7%91%E4%B8%93%E4%B8%9A%E7%9F%A5%E8%AF%86%EF%BC%8C%E5%85%B6%E5%BA%94%E7%94%A8%E7%9A%84%E5%9F%BA%E7%A1%80%E6%98%AF%E6%95%B0%E5%AD%97%E5%8C%96%EF%BC%8C%E8%80%8C%E9%87%91%E8%9E%8D%E4%B8%9A%E5%A4%A9%E7%84%B6%E5%B0%B1%E6%98%AF%E6%95%B0%E5%AD%97%E7%9A%84%E9%9B%86%E6%88%90%E4%BD%93%EF%BC%8C%E5%9B%A0%E6%AD%A4%EF%BC%8C%E5%8C%BA%E5%9D%97%E9%93%BE%E6%8A%80%E6%9C%AF%E5%9C%A8%E9%87%91%E8%9E%8D%E4%B8%9A%E6%9C%89%E7%9D%80%E5%B9%BF%E6%B3%9B%E5%92%8C%E6%B7%B1%E5%BA%A6%E5%BA%94%E7%94%A8%E3%80%81%E8%9E%8D%E5%90%88%E7%9A%84%E5%9F%BA%E7%A1%80%E3%80%82"
    },
];

// 更新最后更新时间
function updateLastUpdateTime() {
    const now = new Date();
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    };
    document.getElementById('lastUpdate').textContent = now.toLocaleDateString('zh-CN', options);
}

// 创建新闻卡片
function createNewsCard(news) {
    return `
        <div class="news-card">
            <h2>${news.title}</h2>
            <p>${news.description}</p>
            <p class="source">来源：${news.source}</p>
            <a href="${news.url}" class="read-more" target="_blank">阅读更多</a>
        </div>
    `;
}

// 加载新闻内容
function loadNews() {
    const newsContainer = document.getElementById('newsContainer');
    newsContainer.innerHTML = newsData.map(news => createNewsCard(news)).join('');
}

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', () => {
    updateLastUpdateTime();
    loadNews();

    // 每5分钟更新一次时间
    setInterval(updateLastUpdateTime, 5 * 60 * 1000);
}); 