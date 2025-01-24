# MyApp1

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.0.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

<!-- First Exercies -->

### SD555-Homework-01

- Create an Angular application
- Create a new component `students`
- Display the `students` component as a child to `AppComponent`
- Add the following state to the `students` component:

```typescript
students = [
  { _id: "1", name: "asaad saad" },
  { _id: "2", name: "theo saad" },
  { _id: "3", name: "mike saad" },
  { _id: "4", name: "mada saad" },
];
```

- Display list of students, and use Directives to apply a zebra background color (odd rows in grey, even rows in white)
- Use Pipes to display all names in title case
- Use Pipes to truncate long names to be limited to 20 chars, and display three dots `...` at the end if they were truncated

### SD555-Homework-02

1. Practice the following with signals:
   - create a signal `$count` with 0 value, to represent a counter
   - when the component mount, create an interval to increment the `$count` signal value by one
   - display the `$count` signal in the template
   - create a computed signal `$is_prime`, so when the `$count` signal value is a prime number, it's set to `true`, otherwise it's set to `false`.
   - based on the `$is_prime` signal value, display a message in the template to indicate whether the number value is prime or not.
   - create an effect, so when `$is_prime` is `true`, it prints to the console a message: `Found a Prime number: n`

```typescript
// the effect prints to the console the following:
// Found a Prime Number 2
// Found a Prime Number 3
// Found a Prime Number 5
// Found a Prime Number 7
// Found a Prime Number 11
// Found a Prime Number 13
// Found a Prime Number 17
```

2. Create a custom pipe `shorten` that truncates strings for a given length and concatenate `...` at the end. Example:

```typescript
@Component({template: `{{'Welcome to SD555 course' | shorten:10}}`}) // it will render `Welcome to...`
```

```typescript
@Component({template: `{{'Welcome MSD!' | shorten:25}}`}) // it will render `Welcome MSD!`, no changes.
```

3. Create a custom pipe `swapLetters` that works on strings and receives a swap object as follows: `{'old_letter': 'new_letter', ...}`. Example:

```typescript
@Component({template: `{{'Asaad and Theo' | swapLetters:{'a':'@', 'o': '0'} }}`}) // it will render `@s@@d @nd The0`
```
