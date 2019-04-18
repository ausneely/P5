var width = 500;
var height = 500;

d3.csv("colleges.csv", function(csv) {
    for (var i = 0; i < csv.length; ++i) {
        csv[i].Predominant_Degree = Number(csv[i].Predominant_Degree);
        csv[i].Highest_Degree = Number(csv[i].Highest_Degree);
        csv[i].Admission_Rate = Number(csv[i].Admission_Rate);
        csv[i].ACT_Median = Number(csv[i].ACT_Median);
        csv[i].SAT_Average = Number(csv[i].SAT_Average);
        csv[i].Undergrad_Population = Number(csv[i].Undergrad_Population);
        csv[i].per_White = Number(csv[i].per_White);
        csv[i].per_Black = Number(csv[i].per_Black);
        csv[i].per_Hispanic = Number(csv[i].per_Hispanic);
        csv[i].per_Asian = Number(csv[i].per_Asian);
        csv[i].per_American_Indian = Number(csv[i].per_American_Indian);
        csv[i].per_Pacific_Islander = Number(csv[i].per_Pacific_Islander);
        csv[i].per_Biracial = Number(csv[i].per_Biracial);
        csv[i].per_Nonresident_Aliens = Number(csv[i].per_Nonresident_Aliens);
        csv[i].per_Part_time_Undergrads = Number(csv[i].per_Part_time_Undergrads);
        csv[i].Average_Cost = Number(csv[i].Average_Cost);
        csv[i].Expenditure_Per_Student = Number(csv[i].Expenditure_Per_Student);
        csv[i].Average_Faculty_Salary = Number(csv[i].Average_Faculty_Salary);
        csv[i].per_Full_time_Faculty = Number(csv[i].per_Full_time_Faculty);
        csv[i].per_Undergrads_with_Pell_Grant = Number(csv[i].per_Undergrads_with_Pell_Grant);
        csv[i].Completion_Rate_150per_time = Number(csv[i].Completion_Rate_150per_time);
        csv[i].Retention_Rate_First_Time_Students = Number(csv[i].Retention_Rate_First_Time_Students);
        csv[i].per_Undergrads_25_y_o_ = Number();
        csv[i].three_Year_Default_Rate = Number(csv[i].three_Year_Default_Rate);
        csv[i].Median_Debt = Number(csv[i].Median_Debt);
        csv[i].Median_Debt_on_Graduation = Number(csv[i].Median_Debt_on_Graduation);
        csv[i].Median_Debt_on_Withdrawal = Number(csv[i].Median_Debt_on_Withdrawal);
        csv[i].per_Federal_Loans = Number(csv[i].per_Federal_Loans);
        csv[i].per_Pell_Grant_Recipients = Number(csv[i].per_Pell_Grant_Recipients);
        csv[i].Average_Age_of_Entry = Number(csv[i].Average_Age_of_Entry);
        csv[i].Average_Family_Income = Number(csv[i].Average_Family_Income);
        csv[i].Median_Family_Income = Number(csv[i].Median_Family_Income);
        csv[i].Poverty_Rate = Number(csv[i].Poverty_Rate);
        csv[i].Number_of_Unemployed_8_years_after_entry = Number(csv[i].Number_of_Unemployed_8_years_after_entry);
        csv[i].Number_of_Employed_8_years_after_entry = Number(csv[i].Number_of_Employed_8_years_after_entry);
        csv[i].Mean_Earnings_8_years_After_Entry = Number(csv[i].Mean_Earnings_8_years_After_Entry);
        csv[i].Median_Earnings_8_years_After_Entry = Number(csv[i].Median_Earnings_8_years_After_Entry);
    }
});