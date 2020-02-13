export interface ITvMazeData {
  show:{
          id: number,
          name: string,
          language: string,
          genres: string[],
          runtime: number,
          schedule: {
                     time:string,
                     days:string[]
                    },
          network: {
                     name:string,
                     country:{
                               timezone:string
                             } 
                   },
          image: {
                    medium:string,
                    original:string
                 }
        }
}
