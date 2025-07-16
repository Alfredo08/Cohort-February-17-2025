=begin
    Concatenation
    let firstName = "Alex";
    let lastName = "Miller";
    let fullName = firstName + " " + lastName;
    let age = 25;
    console.log("Hey there my name is " + fullName + " And I am " + age + " years old.");

    Interpolation
    let firstName = "Alex";
    let lastName = "Miller";
    let age = 25;
    console.log(`Hey there my name is ${firstName} ${lastName} and I am ${age} years old.`);

    return (
        <>
            <h1> Hey there my name is {firstName} {lastName} </h1>
        </>
    )
=end

# Concatenation in Ruby
first_name = "Alex"
last_name = "Miller"
full_name = first_name + " " + last_name
age = 25
puts "Hey there my name is " + full_name + " and I am " + age.to_s + " years old."

# Interpolation in Ruby
puts "Hey there my name is #{full_name} and I am #{age} years old."