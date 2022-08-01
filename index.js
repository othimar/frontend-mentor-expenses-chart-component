function createBar(item, maxAmount = 60) {
    const chart = document.getElementById('chart');
    const barContainer = document.createElement('div');
    barContainer.classList.add('bar-container');

    const label = document.createElement('div');
    label.classList.add('bar-label')
    label.textContent=item.day;
    barContainer.appendChild(label);

    
    const bar = document.createElement('div');
    bar.classList.add('bar');
    bar.style.height = `${item.amount*150/maxAmount}px`;
    
    const d = new Date();
    const today = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"][d.getDay()];
    if(item.day  == today){
        bar.classList.add('current-day');
    }
    barContainer.appendChild(bar);



    const tooltip = document.createElement('div');
    tooltip.classList.add('tooltip');
    tooltip.innerText="$"+item.amount;
    tooltip.style.top = `-30px`;
    tooltip.style.left = `2px`

    barContainer.appendChild(tooltip);


    chart.appendChild(barContainer);

}

function loadData() {
    fetch("data.json")
        .then(response => response.json())
        .then(jsonResponse => {
            //console.log(jsonResponse);
            const dataArray = jsonResponse;
            for (let i = 0; i < dataArray.length; i++) {
                createBar(dataArray[i]);
            }
        });
}

loadData();