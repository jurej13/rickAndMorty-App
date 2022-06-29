export interface DataResponse {
    data: Data;
}

export interface Data {
    characters: Characters;
}

export interface Characters {
    info:    Info;
    results: Result[];
}

export interface Info {
    count: number;
    pages: number;
    next:  number;
    prev:  number;
}

export interface Result {
    name:  string;
    image: string;
}