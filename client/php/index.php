<?php
   $curl = curl_init();

   // set our url with curl_setopt()
   curl_setopt($curl, CURLOPT_URL, "https://app.siameseasset.co.th/salesforceapi/api/ServiceApi");
   
   // return the transfer as a string, also with setopt()
   curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
   
   // curl_exec() executes the started curl session
   // $output contains the output string
   $output = curl_exec($curl);
   
   // close curl resource to free up system resources
   // (deletes the variable made by curl_init)
   curl_close($curl);

   function callAPI($method, $url, $data){
    $curl = curl_init();
    switch ($method){
       case "POST":
          curl_setopt($curl, CURLOPT_POST, 1);
          if ($data)
             curl_setopt($curl, CURLOPT_POSTFIELDS, $data);
          break;
       case "PUT":
          curl_setopt($curl, CURLOPT_CUSTOMREQUEST, "PUT");
          if ($data)
             curl_setopt($curl, CURLOPT_POSTFIELDS, $data);			 					
          break;
       default:
          if ($data)
             $url = sprintf("%s?%s", $url, http_build_query($data));
    }
    // OPTIONS:
    curl_setopt($curl, CURLOPT_URL, $url);
    curl_setopt($curl, CURLOPT_HTTPHEADER, array(
       'APIKEY: 111111111111111111111',
       'Content-Type: application/json',
    ));
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    // EXECUTE:
    $result = curl_exec($curl);
    if(!$result){die("Connection Failure");}
    curl_close($curl);
    return $result;
 }

    $get_data = callAPI('GET', 'https://api.example.com/get_url/'.$user['User']['customer_id'], false);
    $response = json_decode($get_data, true);
    $errors = $response['response']['errors'];
    $data = $response['response']['data'][0];

    $data_array =  array(
        "customer"        => $user['User']['customer_id'],
        "payment"         => array(
              "number"         => $this->request->data['account'],
              "routing"        => $this->request->data['routing'],
              "method"         => $this->request->data['method']
        ),
    );
    $make_call = callAPI('POST', 'https://api.example.com/post_url/', json_encode($data_array));
    $response = json_decode($make_call, true);
     $errors   = $response['response']['errors'];
     $data     = $response['response']['data'][0];

    $data_array =  array(
        "amount" => (string)($lease['amount'] / $tenant_count)
    );
    $update_plan = callAPI('PUT', 'https://api.example.com/put_url/'.$lease['plan_id'], json_encode($data_array));
    $response = json_decode($update_plan, true);
    $errors = $response['response']['errors'];
    $data = $response['response']['data'][0];

    callAPI('DELETE', 'https://api.example.com/delete_url/' . $id, false);

    function callAPI($method, $url, $data, $headers = false){
        $curl = curl_init();
        switch ($method){
           ...
        }
        // OPTIONS:
        curl_setopt($curl, CURLOPT_URL, $url);
        if(!$headers){
            curl_setopt($curl, CURLOPT_HTTPHEADER, array(
               'APIKEY: 111111111111111111111',
               'Content-Type: application/json',
            ));
        }else{
            curl_setopt($curl, CURLOPT_HTTPHEADER, array(
               'APIKEY: 111111111111111111111',
               'Content-Type: application/json',
               $headers
            ));
        }
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
        // EXECUTE:
        ...
    }

    $one_month_ago = date("Y-m-d", strtotime(date("Y-m-d", strtotime(date("Y-m-d"))) . "-1 month"));
    $rent_header = 'Search: and[][created][greater]=' . $one_month_ago . '%and[][created][less]=' . date('Y-m-d') . '%';
    //the actual call with custom search header
    $make_call = callAPI('GET', 'https://api.example.com/get_url/', false, $rent_header);
?>  