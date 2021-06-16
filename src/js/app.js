const app = new Vue({
    el: '#root',
    data: {
        dataEvento: new Date("Jan 5, 2022 15:37:25").getTime(),
        timerEvento: '',
        navList: ['Home', 'Pages', 'Courses' , 'Features', 'Blog', 'Shop'],
        courses: [
            {
                img: 'artist-course-08-480x480.jpg',
                price: '$18.00',
                title: 'The Acrylic Painting Academy',
                lessons: '4',
                students: '50',
            },
            {
                img: 'artist-course-07-480x480.jpg',
                price: '$21.00',
                title: 'Drawing and Shading: Complete Course',
                lessons: '14',
                students: '50',
            },
            {
                img: 'artist-course-06-480x480.jpg',
                price: '$19.00',
                title: 'The Color Theory for Digital Artist',
                lessons: '7',
                students: '50',
            },
            {
                img: 'artist-course-05-480x480.jpg',
                price: '$35.00',
                title: 'Ultimate Guide Digital Sketching for Beginner',
                lessons: '14',
                students: '50',
            },
            {
                img: 'artist-course-04-480x480.jpg',
                price: '$19.00',
                title: 'Portrait Drawing The Smart Way',
                lessons: '2',
                students: '50',
            },
            {
                img: 'artist-course-03-480x480.jpg',
                price: '$19.00',
                title: 'Mastering Watercolor Painting from Beginner',
                lessons: '9',
                students: '50',
            },
            {
                img: 'artist-course-02-480x480.jpg',
                price: '$25.00',
                title: 'The Art & Science of Drawing',
                lessons: '4',
                students: '50',
            },
            {
                img: 'artist-course-01-480x480.jpg',
                price: '$22.00',
                title: 'The Colored Pencil Drawing Course',
                lessons: '6',
                students: '50',
            },
        ],
        footerExplore: ['Start here', 'Success story', 'Blog', 'Courses', 'Contact us'],
        footerInformation: ['Membership', 'Purchase guide', 'Privacy policy', 'Terms of services'],
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