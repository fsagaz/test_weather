class CitiesListController {
    constructor(CitiesService) {
        this.citiesService = CitiesService
        this.cities = [];
        this.actualTime;
        this.cities_array = ["Madrid", "Barcelona", "Berlin"];
        this.loadData();
        setInterval(() => this.loadData(), 15000);
    }

    loadData() {
        var cities_temp = [];
        console.log(this.actualTime);
        for (let i = 0; i < this.cities_array.length; i++) {
            this.citiesService.getCitiesTemp(this.cities_array[i]).
            then(response => {
                cities_temp.push(response.main);
            }).then(response => {
                for (let i = 0; i < cities_temp.length; i++) {
                    cities_temp[i].name = this.cities_array[i];
                }
                this.actualTime = Date.now();
                this.cities = cities_temp;
            })
        }

    }
}

CitiesListController.$inject = ['CitiesService']

export default CitiesListController
