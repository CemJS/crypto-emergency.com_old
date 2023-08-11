export const loader = function () {

  let eventSource = this.eventSource(`UniverCategories?uuid=${this.Variable.myInfo.uuid}`)

  eventSource.addEventListener('message', ({ data }) => {
    let records = JSON.parse(data)
    console.log('=641d61=', records)
    this.Static.records = records
    this.init()
  });
}