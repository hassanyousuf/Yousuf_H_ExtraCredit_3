(()=>{
    const vm = new Vue({
        el: '#app',

        data: {
            mainmessage : " welcome to my video app!",
            videodata : [

                {title:"sometitle", path: "some path", vid_thumb: "avengers.jpg"},
                {title:"sometitle", path: "another path", vid_thumb: "forceawakens.jpg"},
                {title:"sometitle", path: "third path", vid_thumb: "strangerthings.jpg"}

            ],
            singlemoviedata : [ ],

            videotitle : "",
            videosource : "",
            videodescription : "",
            showDetails : false
        },


        created : function(){
            this.fetchMovieData(null);
        },


        methods: {
            fetchMore(e){
                this.fetchMovieData(e.currentTarget.dataset.movie); //this will be id for database
            },

            laodMovie(){
                //stub
                e.preventDefault();

                dataKey = e.currentTarget.getAttribute('href');

                currentData = this.videodata.filter(video => video.vid_path === dataKey);

                this.bideotitle = currentData[0].vid_name;
                this.videodescription = currentData[0].vid_desc;
                this.videosource = dataKey;

                this.showDetails = true;

                setTimeout(function() { window.scrollTo(0, 1200); }, 500 )

            },

            scrollBackUp() {
                window.scrollTo(0, 0);
                this.showDetails = false;
                this.videosource = "";
            },

            fetchMovieData(movie) {
                url = movie ? `./includes/index.php?movie=${movie}` : './includes/index.php';
                //tihs means if it is true the first will happen, if it is false then the second will happen
                //aternery opperator

                fetch(url) // pass in the one or many query
                .then(res => res.json())
                .then(data => {
                    if (movie) {
                        console.log(data)
                        //getting the movie, so use the single array
                        this.singlemoviedata = data; // grabbed from line 8
                    }else{
                        console.log(data)
                        //push all the video (or portfolio content) into the video array
                        this.videodata = data;

                    }
                })
                .catch(function(error){ 
                console.log(error);
            });
            }

        }
    });

})();



//this is where all my content from data base will come here first