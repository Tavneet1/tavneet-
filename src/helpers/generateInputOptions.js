export function generateHeightOptions() {
    const heightOptions = [];
    for (let feet = 4; feet <= 9; feet++) {
        for (let inches = 0; inches <= 12; inches++) {
            heightOptions.push(`${feet}ft ${inches}in`);
        }
    }
    return heightOptions;
}

export function generateSalaryOptions() {
    const Salary = [];
    const rangeStep = 3;
    const maxSalary = 50; // Maximum salary in LPA
    for (let i = rangeStep; i <= maxSalary; i += rangeStep) {
        const lowerRange = i - rangeStep;
        const upperRange = i;
        const category = `${lowerRange} LPA to ${upperRange} LPA`;
        Salary.push(category);
    }
    Salary.push(`Above ${maxSalary} LPA`);
    return Salary;
}

export function generateAgeOptions() {
    const ageOptions = [];
    for (let age = 18; age <= 55; age++) {
        ageOptions.push(age);
    }
    return ageOptions;
}