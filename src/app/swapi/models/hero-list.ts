import { Hero } from './hero';

export class HeroList {
    results: Array<Hero> = [];
    count: number;
    next: string;
    previous: string;
}