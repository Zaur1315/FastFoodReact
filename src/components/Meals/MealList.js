import styles from "./MealList.module.css"
import Card from "../UI/Card"
import MealItem from "./MealItem/MealItem"

const DUMMY_MEALS = [
    {
        id:'m1',
        name: 'Шаурма Сырная на углях',
        description: 'Сырный лаваш, куриное филе, капуста, морковь, сыр, фирменный соус',
        price: 3.99,
    },
    {
        id:'m2',
        name: 'Шашлык из курицы на углях',
        description: 'Лаваш, куриное филе, салат, лук, фирменный соус',
        price: 5.99,
    },
    {
        id:'m3',
        name: 'Шаурма Классическая на углях',
        description: 'Лаваш, куриное филе, капуста, морковь, фирменный соус',
        price: 3.99,
    },
    {
        id:'m4',
        name: 'Шаурма Чесночная на углях"',
        description: 'Лаваш чесночный, куриное филе, капуста, морковь, фирменный соус чесночный',
        price: 4.39,
    },
    {
        id:'m5',
        name: 'Пицца Биг-Зур на углях ',
        description: 'Корж, куриное филе, сыр, фирменный соус (добавки на выбор)',
        price: 7.99,
    },
    {
        id:'m6',
        name: 'Пицца колбасная на углях ',
        description: 'Корж, колбаса, сыр, фирменный соус. Подается в сложенном виде, добавки на выбор (20 см)',
        price: 6.99,
    },
    {
        id:'m7',
        name: 'Пицца классическая на углях',
        description: 'Куриное филе, сыр, фирменный соус (15 см)',
        price: 6.99,
    },
    {
        id:'m8',
        name: 'Сэндвич на углях',
        description: 'Хлеб для сэндвича, салат, куриное филе, сыр, фирменный соус, соленые огурцы',
        price: 4.99,
    },

]

const MealList = () => {

    const mealList = DUMMY_MEALS.map(meal => <MealItem name = {meal.name} id={meal.id} description = {meal.description} price = {meal.price} key = {meal.id}/>)

    return <section className={styles.meals}>
    <Card>
        <ul>
            {mealList}
        </ul>
        </Card>
    </section>
}

export default MealList;