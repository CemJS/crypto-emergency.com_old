import { Cemjsx } from "cemjs-all"
let x1, y1 = null;
export default function ({ items }) {
    return (
        <ul class="category-carousel"
            ref="categoryCarousel"
            onmousedown={(e) => {
                this.Static.isDrag = true;
                this.Ref.categoryCarousel.classList.add("dragging");
                this.Static.startX = e.pageX;
                this.Static.startScrollLeft = this.Ref.categoryCarousel.scrollLeft;
            }}
            onmousemove={(e) => {
                if (!this.Static.isDrag) return;
                e.preventDefault();
                this.Ref.categoryCarousel.scrollLeft = this.Static.startScrollLeft - (e.pageX - this.Static.startX);
            }}
            onmouseup={(e) => {
                this.Static.isDrag = false;
                this.Ref.categoryCarousel.classList.remove("dragging");
            }}
            onscroll={() => {
                if (this.Ref.categoryCarousel.scrollLeft === 0) {
                    // this.Ref.categoryCarousel.classList.remove("category-wrap_shadow-left");
                } else if (this.Ref.categoryCarousel.scrollLeft === this.Ref.categoryCarousel.scrollWidth - this.Ref.categoryCarousel.offsetWidth) {
                    this.Ref.categoryCarousel.classList.remove("category-wrap_shadow-right");
                }
                // this.init();
            }}
            onwheel={(e) => {
                if (e.deltaY < 0) {
                    this.Ref.categoryCarousel.scrollLeft += this.Ref.categoryEl.offsetWidth + 15;
                } else if (e.deltaY > 0) {
                    this.Ref.categoryCarousel.scrollLeft -= this.Ref.categoryEl.offsetWidth + 15;
                }
            }}
            onmouseenter={() => {
                this.Static.body.classList.add('disable_scroll');
            }}
            onmouseleave={() => {
                this.Static.body.classList.remove('disable_scroll');
            }}
            ontouchstart={(e) => {
                const firstTouch = e.touches[0];
                x1 = firstTouch.clientX;
                y1 = firstTouch.clientY;
            }}
            ontouchmove={(e) => {
                if (!x1 || !y1) return false;
                let x2 = e.touches[0].clientX;
                let y2 = e.touches[0].clientY;
                let xDiff = x2 - x1;
                let yDiff = y2 - y1;

                if (Math.abs(xDiff) > Math.abs(yDiff)) {
                    if (xDiff > 0) {
                        this.Ref.categoryCarousel.scrollLeft -= this.Ref.categoryEl.offsetWidth + 15;
                    }
                    else {
                        this.Ref.categoryCarousel.scrollLeft += this.Ref.categoryEl.offsetWidth + 15;
                    }
                }
                x1 = null;
                y1 = null;
            }}
        >
            {items.map((item: any, index: number) => {
                return (
                    <li
                        ref="categoryEl"
                        draggable="false"
                        class={["category-item", this.Static.catActive == index ? "category-item_active" : null]}
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
    )
}