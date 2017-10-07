# Display a list of employees, who receive salary greater than the direct chief's salary.
select
    e1.*
    , e2.salary as chief_salary
from
    employee e1
    join employee e2 on (e2.id = e1.chief_id)
where
    e2.salary < e1.salary;

# Display a list of all departments along with an employee who receives the maximum salary in it. if more than one employee has the maximum salary, display all.
# The department should be shown even if it has no employees
select
    d.*
    , e.name
from
    department d
    left join employee e on (e.department_id = d.id)
where
    e.salary = (select max(e1.salary) from employee e1 where e1.department_id = d.id);

# Display a list of employees, who have exactly one direct subordinate.
select
    e1.*
from
    employee e1
    join employee e2 on (e1.id = e2.chief_id)
group by
    e1.id
having
    count(e1.id) = 1;

# Display a list of departments sorted by total salary of employees in it, descending.
select
    d.id,
    d.name,
    sum(e.salary) as total_salary
from
    department d
    join employee e on (e.department_id = d.id)
group by
    d.id
order by
    total_salary desc;
