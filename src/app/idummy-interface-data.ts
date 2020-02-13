export interface IDummyInterfaceData {
    show: {
            id: number | null | undefined,
            name: string | null | undefined,
            language: string | null | undefined,
            genres: string[] | null | undefined,
            runtime: number | null | undefined,
            schedule: {
                      time:string | null | undefined,
                      days:string[] | null | undefined
                      }
          }


}
