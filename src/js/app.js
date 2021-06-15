const app = new Vue({
    el: '#root',
    data: {
        dataEvento: new Date("Jan 5, 2022 15:37:25").getTime(),
        timerEvento: '',
        navList: ['Home', 'Pages', 'Courses' , 'Features', 'Blog', 'Shop']
    },
    methods: {
            
    },
    mounted() {
        setInterval( () => {
            //console.log(this.timerEvento);
            // Get today's date and time
            var now = new Date().getTime();
                
            // Find the distance between now and the count down date
            var distance = this.dataEvento - now;
                
            // Time calculations for days, hours, minutes and seconds
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Output the result 
            this.timerEvento = days + ' : ' + hours + " : "
            + minutes + " : " + seconds;
            return this.timerEvento;
        }, 1000)
        
    }
})