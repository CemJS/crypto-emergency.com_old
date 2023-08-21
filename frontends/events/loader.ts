export const loader = function () {
  this.fn("addEvent", {})

  this.Static.makeFilter = {
    cat: "",
    country: ""
  }

    class myClass {
      arr: string[];
      field: string
      item: string
     
      constructor(recordsArray: string[]) {
        this.arr = recordsArray;
      }

      getUniqueArrayByField(field: string) { 
        const uniqueSet = new Set(); 
        
        this.arr.forEach(item => {
          uniqueSet.add(item[field]);
        });
        const uniqueArray =  Array.from(uniqueSet)

        if(field == 'country'){
          uniqueArray.unshift('Все страны')
        }else if(field == 'category'){
          uniqueArray.unshift('Все категории')
        }
        
        return uniqueArray
       }

    }
    this.Static.classObject = new myClass(this.Static.records)
    this.Static.uniqueCountries =  this.Static.classObject.getUniqueArrayByField('country')


    //   Переменные состояния выпадающих списков
    this.Static.catergorySelectorStatus = 'close'
    this.Static.countrySelectorStatus = 'close'

    // Переменные для поисков
    this.Static.seachCountries = this.Static.uniqueCountries
    this.Static.filtredRecords = this.Static.records
    
    

}

