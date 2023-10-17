import { Cemjsx } from "cemjs-all"

export default function ({ items }) {
    return (
        <div class="category-wrap">
            <ul class="category-carousel">
                {items.map((item: any, index: number) => {
                    return (
                        <li class={["category-item", this.Static.catActive == index ? "category-item_active" : null]}
                            onclick={() => {
                                if (this.Static.catActive == index) { return }
                                this.Static.catActive = index
                                this.fn("addEvent")
                            }}>
                            <span>{item.name}</span>
                        </li>
                    )
                })
                }
            </ul>
        </div>
    )
}