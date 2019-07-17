from datetime import date

id_number = input("Please enter id number: ")
inv_amount = int(input("Investment amount: R"))

def get_age():
    today = str(date.today())
    get_birth_year = id_number[:2]
    get_birth_month = id_number[2:4]
    get_birth_day = id_number[5:6]
    today_dig = today[2:4]
    get_current_year = today[:4]
    get_current_month = today[5:7]
    get_current_day = today[8:10]

    if get_birth_year <= today_dig:
        get_birth_year_new = "20" + get_birth_year
    else:
        get_birth_year_new = "19" + get_birth_year

    if get_birth_month < get_current_month:
        age =int(get_current_year)-int(get_birth_year_new)
    else:
        age =int(get_current_year)-int(get_birth_year_new)-1

    return age
    
    
def get_prem(age, inv_amount):
    
    premiumMatrix = {"ageIndex":{range(0,26):0,
                                 range(26,44):1,
                                 range(41,46):2,
                                 range(46,51):3,
                                 range(51,56):4,
                                 range(56,61):5,
                                 range(61,66):6,
                     },
                     "feeIndex":{range(0,10001):[36.00, 47.00, 52.00, 57.00, 64.00, 74.00, 90.00],
                                 range(10001,15001):[49.05, 64.95, 73.05, 79.95, 90.00, 106.05, 130.05],
                                 range(15001,18001):[57.06, 75.42, 85.32, 93.42, 105.84, 125.46, 154.26],
                                 range(18001,20001):[62.00, 82.00, 93.00, 102.00, 116.00, 138.00, 170.00],
                                 range(20001,30001):[93.00, 123.00, 139.50, 153.00, 174.00, 207.00, 255.00]
                                }
                 }

    for key, value in premiumMatrix.items():
        ageIndex = premiumMatrix["ageIndex"]
        feeIndex = premiumMatrix["feeIndex"]
        for (ageK, ageV),(preK,preV) in zip(ageIndex.items(),feeIndex.items()) :
            for look in ageK:
                if look == age:
                    age_key = ageV
            for look in preK:
               if look == inv_amount:
                    pre_val = preV

    prem_fee= pre_val[age_key]

    return prem_fee

age = get_age()
prem_fee = get_prem(age, inv_amount)

print("Your age is: {} years old".format(age))
print("Your investment amount is R{}".format(inv_amount))
print("The monthly fee is R10.00")
print("The premium fee is R{}".format(prem_fee))
print("Your total is R{}".format(prem_fee+10))
