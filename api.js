const searchField = () => {
    const searchField = document.getElementById('searchField');
    const searchText = searchField.value;
    // console.log(searchText);
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
        .then(res => res.json())
        .then(data => displayResult(data.meals))

    searchField.value = '';
}

const displayResult = meals => {
    // console.log(meals);
    const items = document.getElementById('meals');
    meals.forEach(meal => {
        console.log(meal);
        const { strMealThumb, strCategory, strMeal, idMeal } = meal;
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
            <div class="col" onclick="mealDetail(${idMeal})">
                <div class="card" >
                    <img src="${strMealThumb}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${strCategory}</h5>
                        <h5 class="card-title">${strMeal}</h5>
                    </div>
                </div>
            </div>
        `
        items.appendChild(div);
    });
}

const mealDetail = id => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayMealDetail(data.meals[0]))
}

const displayMealDetail = (detail) => {
    console.log(detail)
    const details = document.getElementById('detail');
    details.innerHTML = '';
    const { strIngredient1, strIngredient2, strIngredient3, strMealThumb } = detail;
    const div = document.createElement('div');
    div.innerHTML = `
        <div class="col">
            <div class="card" >
                <img src="${strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${strIngredient1}</h5>
                    <h5 class="card-title">${strIngredient2}</h5>
                    <h5 class="card-title">${strIngredient3}</h5>
                </div>
            </div>
        </div>
    `
    details.appendChild(div);


}



