const tabs = document.querySelectorAll("[data-tab-target]");
const tabContent = document.querySelectorAll("[data-tab-content]");
tabs.forEach((tab1)=>{
    tab1.addEventListener("click", ()=>{
        const target = document.querySelector(tab1.dataset.tabTarget);
        tabContent.forEach((tabContent1)=>{
            tabContent1.classList.remove("active");
        });
        tabs.forEach((tab)=>{
            tab.classList.remove("active");
        });
        tab1.classList.add("active");
        target.classList.add("active");
    });
});

//# sourceMappingURL=index.b19a5242.js.map
