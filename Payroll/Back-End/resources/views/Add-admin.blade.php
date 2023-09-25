<!doctype html>
<html lang="en">
  <head>
    <title>Title</title>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

    <style>
      input{
            display: flex;
            flex-direction: column;
      }
      select{
            display: flex;
            flex-direction: column;
      }
      date{
            display: flex;
            flex-direction: column;
      }
      file{
            display: flex;
            flex-direction: column;
      }
      number{
            display: flex;
            flex-direction: column;
      }

    </style>
  </head>
  <body>     
    <form action="{{ url('/') }}/store" method="post" enctype="multipart/form-data">
      @csrf
      <div class="container m-lg-4">
            <input type='text' name='id' placeholder="Admin Id">
            <input type='text' name='name' placeholder="Name"> 
              <input type='text' name='fathers_name' placeholder="Fathers Name"> 
              <select name='department' placeholder="Department">
                <option value='01'>01 - Admin</option>
                <option value='02'>02 - Content Department</option>
                <option value='03'>03 - Customer Support Department</option>
                <option value='04'>04 - Designer Department</option>
                <option value='05'>05 - SEO Department</option>
                <option value='06'>06 - Social Media Department</option>
                <option value='07'>07 - Software Development Department</option>
              </select>
              <select name='designation' aria-placeholder="Designation">
                <option value="director ceo">Director / CEO</option>
                <option value="director md" selected>Director / MD</option>
                <option value="hr">HR</option>
                <option value="hr manager">HR Manager</option>
                <option value="cto">CTO</option>
                <option value="technical lead">Technical Lead</option>
                <option value="content writer">Content Writer</option>
                <option value="designer">Designer</option>
                <option value="sr designer">Sr Designer</option>
                <option value="seo executive">SEO Executive</option>
                <option value="sr seo executive">Sr SEO Executive</option>
                <option value="front-end developer">Frontend Developer</option>
                <option value="developer">Developer</option>
                <option value="customer care executive">Customer Care Executive</option>
                <option value="sr customer care executive">Sr Customer Care Executive</option>
              </select>

              profile pic : <input type="file" name='profile_picture' >
              
              Dob : <input type="date" name='birth_date'> 
              Gender : <select name='gender'>
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              <input type='text' name='qualification' placeholder="qualification"> 
              <input type='number' name='c_no' placeholder="c-no"> 
              <input type='number' name='w_no' placeholder="w-no"> 
              <input type='number' name='a_no' placeholder="a-no"> 
              <input type='email' name='o_email' placeholder="o-email"> 
              <input type='email' name='p_email' placeholder="P-email">
              marital status :  
              <select name='marital_status'>
                <option value="">Select</option>
                <option value="single">Single</option>
                <option value="married">Married</option>
              </select>
              <input type='text' name='blood_group' placeholder="blood-group">
              <input type='text' name='p_address' placeholder="p-address"> 
              <input type='text' name='p_city' placeholder="p-city"> 
              <input type='text' name='p_state' placeholder="p-state"> 
              <input type='number' name='p_pincode' placeholder="p-pincode"> 
              <input type='text' name='p_country' placeholder="p-country"> 
              <input type='text' name='c_address' placeholder="c-address"> 
              <input type='text' name='c_city' placeholder="c-city"> 
              <input type='text' name='c_state' placeholder="c-state"> 
              <input type='number' name='c_pincode' placeholder="c-pincode"> 
              <input type='text' name='c_country' placeholder="c-country">  
              <input type='number' name='aadhar_no' placeholder="aadharno"> 
              aadhar file :
              <input type="file" name='aadhar_file'> 
              <input type='text' name='pancard_id' placeholder="pancard no"> 
              pancard file
              <input type="file" name='pancard_file'> 
              <input type='number' name='uan_no' placeholder="uan no"> 
              <input type='text' name='bank_name' placeholder="bank name"> 
              <input type='number' name='bank_account_no' placeholder="bank account no"> 
              <input type='text' name='bank_ifsc_code' placeholder="bank ifsc code"> 
              offer date : <input type='date' name='offer_date' > 
              joining date : <input type='date' name='joining_date'> 
              last working date: <input type='date' name='last_working_date'> 
            
              created by:<input type='text' name='created_by'> 
              username : <input type='text' name='user_name'> 
            
    
            <button type='submit' name='submit'>Submit</button>
            <button type='reset'>Reset</button>
          </div> 
          </form>

  </body>
</html>