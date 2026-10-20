# Practical Exam 1 Smart Task Counter

## Completed
- created count and target state using useState
- created working buttons of increment, decrement, reset, and debugged the addTwo
- shows status change from the changes in the current state
- disabled the increment and plus two buttons once the target is met 

## Limitations
- plus two button would always add two, so if the count was at 4 followed by plus two, the count would surpass the target

## Tests
- Following the validation cases:
    - at the start, app shows target at 5 and count at 0
    - count at 4 followed by plus two shows count at 6, surpassing the target and disabling the buttons increment and plus two
    - count at 0 followed by decrement still shows the count at 0
    - reset after the target is reached shows count at 0

## Bug
- two setCount(count + 1); would only increase the count by only one, this is because both calls of the 'count' would set it at the same value, so if we used a function form, setCount((c) => c + 1), we could use the latest value. 