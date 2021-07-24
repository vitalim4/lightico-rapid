export interface Country {
    code: string
    confirmed: number
    country: string
    critical: number
    deaths: number
    lastChange: string
    lastUpdate: string
    latitude: number
    longitude: number
    recovered: number
  }

  export interface StatusDate {
    country: string
    latitude: number
    longitude: number
    date: string
    provinces: Province[]
  }

  export interface Province{
    province: string
    confirmed: number
    recovered: number
    deaths: number
    active: number
  }