export const makeFilters = function (show = false) {
    let url = `/api/events/Ico?uuid=${this.Variable.myInfo.uuid}`
    if (show) {
        url += `&id=${this.Variable.DataUrl[2]}`
        console.log('=d798f1=',url)
        return url
    }


    // url += `&lang=ru`
    if (this.Static.makeFilter.cat != 0) {
        url += `&cat=${this.Static.categories[this.Static.makeFilter.cat].name}`
    }
    if (this.Static.makeFilter.active) {
        url += `&active=${this.Static.makeFilter.active}`
    }

    if (this.Static.moreid) {
        url += `&moreid=${this.Static.moreid}`
        this.Static.moreid = null
    } else {
        this.Static.records = []
    }
    return url
}

export const addEvent = function () {
    let filters = this.fn("makeFilters")
    let icoListeners = [
        {
            type: "add",
            fn: ({ data }) => {
                let record = JSON.parse(data)
                if (Object.keys(record).length) {
                    this.Static.records.push(record)
                }
                this.init()
            }
        }
    ]
    let showListeners = [
        {
            type: "update",
            fn: ({ data }) => {
                let record = JSON.parse(data)
                if (Object.keys(record).length) {
                    this.Static.record = record
                }
                this.init()
            }
        }
    ]
    // this.Static.records = []
    if (!this.Events.ico) {
        this.Events.ico = this.event(filters, icoListeners)
    } else {
        this.Events.ico.change(filters, icoListeners)
    }


    if (this.Variable.DataUrl[1] == "show") {
        filters = this.fn("makeFilters", true)
        if (!this.Events.show) {
            this.Events.show = this.event(filters, showListeners)
        } else {
            this.Events.show.change(filters, showListeners)
        }
    }
}



// export const change = function () {
//     this.Static.records = []
//     if (this.Static.makeFilter.cat == 0) {
//         this.Events.ico.change(`/api/events/Ico?uuid=${this.Variable.myInfo.uuid}&lang=ru&active=${this.Static.makeFilter.active}`, [
//             {
//                 type: "add",
//                 fn: ({ data }) => {
//                     let record = JSON.parse(data)
//                     if (Object.keys(record).length) {
//                         this.Static.records.push(record)
//                     }
//                     this.init()
//                 }
//             }
//         ])
//     } else {
//         console.log('=dcbe86=', this.Static.makeFilter.cat)
//         this.Events.ico.change(`/api/events/Ico?uuid=${this.Variable.myInfo.uuid}&cat=${this.Static.categories[this.Static.makeFilter.cat].name}&active=${this.Static.makeFilter.active}`, [
//             {
//                 type: "add",
//                 fn: ({ data }) => {
//                     let record = JSON.parse(data)
//                     if (Object.keys(record).length) {
//                         this.Static.records.push(record)
//                     }
//                     this.init()
//                 }
//             }
//         ])



//     }
// }

