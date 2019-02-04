describe("fizzBuzz", function(){
	it("should return 1", function(){
		expect(fizzBuzz(1)).toEqual(1);
	});
		it("should return Fizz", function(){
		expect(fizzBuzz(3)).toEqual("Fizz");
	});
		it("should return Buzz", function(){
		expect(fizzBuzz(5)).toEqual("Buzz");
	});
		it("should return FizzBuzz", function(){
		expect(fizzBuzz(15)).toEqual("FizzBuzz");
	});
});