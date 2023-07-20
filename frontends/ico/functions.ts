

const fn = {
    "addEvent": function ({ cat }) {
        let url = `Ico?uuid=${this.Variable.myInfo.uuid}`
        if (cat) {
            url += `&cat=${cat}`
        }
        let eventSource

        if (this._ListsEventSource.length) {
            eventSource = this.eventSourceChange(url)
        } else {
            eventSource = this.eventSource(url)
        }
        eventSource.addEventListener('message', ({ data }) => {
            let records = JSON.parse(data)
            console.log('=57054c=', records)
            this.Static.records = records
            this.init()
        });
    }
}

export { fn }