describe("Auth API", function() {
    var a;
  const input={email:"prasanth@gmail.com", password:"AASASASA"}
  const response={
    "auth": true,
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlcyI6WyJVU0VSIl0sImlhdCI6MTY1NzAzNDg0MCwiZXhwIjoxNjU3MTIxMjQwfQ.5GXhAG8E-mRGvuIz-lxKoyedg5TOUcfQJG99uIgHXbk",
    "status": {
        "statusCode": 200,
        "message": "Success"
    }
}
    it("and so is a spec", function() {
      a = true;
  
      expect(a).toBe(true);
    });
  });