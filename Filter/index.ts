//Getter and Setter:
private _listFilter: string = '';

get listFilter(){
    return this._listFilter;
}

set listFilter(value : string){
    this._listFilter = value
    this.performFilter(this._listFilter)
}

//ViewChild way:

@ViewChild(NgModel) filter!:NgModel

ngAfterViewInit(): void {
  this.filter.valueChanges?.subscribe(()=>{
    this.performFilter(this.listFilter)
  })
}



performFilter(filterBy ?: string): void {
    if(filterBy) {
        this.filteredProducts = this.products.filter(product =>
            product.productName.toLocaleLowerCase().indexOf(filterBy.toLocaleLowerCase()) !== -1);
    } else {
        this.filteredProducts = this.products;
    }
}