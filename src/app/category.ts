export interface CategoryDetailes {
    results:  number;
    metadata: Metadata;
    data:     Category[];
}

export interface Category {
    _id:       string;
    name:      string;
    slug:      string;
    image:     string;
    createdAt: Date;
    updatedAt: Date;
}

export interface Metadata {
    currentPage:   number;
    numberOfPages: number;
    limit:         number;
}
