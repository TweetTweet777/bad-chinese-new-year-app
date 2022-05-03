var day = 1;
var month = 1;
var year = 1924;
var yinyang = "";
var element = "";
var stem = "";
var branch = "";
var sign = "";


onEvent("image2", "click", function( ) {
	console.log("image2 clicked!");
	setScreen("Tiger_Sign");
});

onEvent("Title", "click", function( ) {
	console.log("Title clicked!");
	setScreen("Tiger_Sign");
});

onEvent("label3", "click", function( ) {
	console.log("label4 clicked!");
	setScreen("zodiac");
});

onEvent("label4", "click", function( ) {
	console.log("label4 clicked!");
	setScreen("zodiac");
});

onEvent("image5", "click", function( ) {
	console.log("image5 clicked!");
	setScreen("zodiac");
});

onEvent("label4", "mouseover", function(){
  setSize("label4", 150, 24);
  setSize("image5", 24, 24);
});

onEvent("label4", "mouseout", function(){
  setSize("label4", 125, 20);
  setSize("image5", 20, 20);
});

onEvent("image5", "mouseover", function(){
  setSize("label4", 150, 24);
  setSize("image5", 24, 24);
});

onEvent("image5", "mouseout", function(){
  setSize("label4", 125, 20);
  setSize("image5", 20, 20);
});

onEvent("a", "click", function( ) {
	console.log("a clicked!");
	setScreen("signs");
});

onEvent("Day", "change", function( ) {
	console.log("Selected option: " + getText("Day"));
	day = getText("Day");
});

onEvent("Month", "change", function( ) {
	console.log("Selected option: " + getText("Month"));
	month = getText("Month");
});

onEvent("Year", "change", function( ) {
	console.log("Selected option: " + getText("Year"));
	year = getText("Year");
});

onEvent("calculate", "click", function( ) {
	console.log("calculate clicked!");
	Main();
	eLement();
	sTem();
	setText("Sign", sign);
	setText("YinYang", yinyang);
	setText("Element", element);
	setText("Branch", branch);
	setText("Stem", stem);
	
});

onEvent("Sign", "click", function( ) {
	signpage();
});

onEvent("Element", "click", function( ) {
	setScreen("element");
});

onEvent("YinYang", "click", function( ) {
	setScreen("element");
});

onEvent("Branch", "click", function( ) {
	setScreen("element");
});

onEvent("Stem", "click", function( ) {
	setScreen("element");
});

onEvent("home1", "click", function( ) {
	setScreen("Home_Screen");
});

onEvent("home2", "click", function( ) {
	setScreen("Home_Screen");
});

onEvent("home3", "click", function( ) {
	setScreen("Home_Screen");
});

onEvent("home4", "click", function( ) {
	setScreen("Home_Screen");
});

onEvent("home5", "click", function( ) {
	setScreen("Home_Screen");
});

onEvent("home6", "click", function( ) {
	setScreen("Home_Screen");
});

onEvent("home7", "click", function( ) {
	setScreen("Home_Screen");
});

onEvent("home8", "click", function( ) {
	setScreen("Home_Screen");
});

onEvent("home9", "click", function( ) {
	setScreen("Home_Screen");
});

onEvent("home10", "click", function( ) {
	setScreen("Home_Screen");
});

onEvent("home11", "click", function( ) {
	setScreen("Home_Screen");
});

onEvent("home12", "click", function( ) {
	setScreen("Home_Screen");
});

onEvent("home13", "click", function( ) {
	setScreen("Home_Screen");
});

onEvent("home14", "click", function( ) {
	setScreen("Home_Screen");
});

onEvent("label7", "click", function( ) {
	setScreen("Home_Screen");
});

onEvent("label40", "click", function( ) {
	setScreen("Home_Screen");
});

onEvent("label25", "click", function( ) {
	console.log("label25 clicked!");
	setScreen("Rat_sign");
});

onEvent("label26", "click", function( ) {
	console.log("label25 clicked!");
	setScreen("Ox_sign");
});

onEvent("label27", "click", function( ) {
	console.log("label25 clicked!");
	setScreen("Tiger_Sign");
});

onEvent("label28", "click", function( ) {
	console.log("label25 clicked!");
	setScreen("Rabbit_sign");
});

onEvent("label29", "click", function( ) {
	console.log("label25 clicked!");
	setScreen("Dragon_sign");
});

onEvent("label31", "click", function( ) {
	console.log("label25 clicked!");
	setScreen("Snake_sign");
});

onEvent("label30", "click", function( ) {
	console.log("label25 clicked!");
	setScreen("Horse_sign");
});

onEvent("label32", "click", function( ) {
	console.log("label25 clicked!");
	setScreen("Goat_sign");
});

onEvent("label36", "click", function( ) {
	console.log("label25 clicked!");
	setScreen("Monkey_sign");
});

onEvent("label35", "click", function( ) {
	console.log("label25 clicked!");
	setScreen("Rooster_sign");
});

onEvent("label34", "click", function( ) {
	console.log("label25 clicked!");
	setScreen("Dog_sign");
});

onEvent("label37", "click", function( ) {
	console.log("label25 clicked!");
	setScreen("Pig_sign");
});

onEvent("button1", "click", function( ) {
	console.log("button1 clicked!");
	setScreen("Signs_all");
});

function Main() {
  //rat
  if (year == 1924 || year == 1936 || year == 1948 || year == 1960 || year == 1972 || year == 1984 || year == 1996 || year == 2008 || year == 2020) {
    sign = "Rat";
    yinyang = "Yang";
    branch = "子";
  }  else if (year == 1925 || year == 1937 || year == 1949 || year == 1961 || year == 1973 || year == 1985 || year == 1997 || year == 2009 || year == 2021) {
    sign = "Ox";
    yinyang = "Yin";
    branch = "丑";
  }  else if (year == 1926 || year == 1938 || year == 1950 || year == 1962 || year == 1974 || year == 1986 || year == 1998 || year == 2010 || year == 2022) {
    sign = "Tiger";
    yinyang = "Yang";
    branch = "寅";
  }  else if (year == 1927 || year == 1939 || year == 1951 || year == 1963 || year == 1975 || year == 1987 || year == 1999 || year == 2011 || year == 2023) {
    sign = "Rabbit";
    yinyang = "Yin";
    branch = "卯";
  }  else if (year == 1928 || year == 1940 || year == 1952 || year == 1964 || year == 1976 || year == 1988 || year == 2000 || year == 2012 || year == 2024) {
    sign = "Dragon";
    yinyang = "Yang";
    branch = "辰";
  }  else if (year == 1929 || year == 1941 || year == 1953 || year == 1965 || year == 1977 || year == 1989 || year == 2001 || year == 2013 || year == 2025) {
    sign = "Snake";
    yinyang = "Yin";
    branch = "巳";
  }  else if (year == 1930 || year == 1942 || year == 1954 || year == 1966 || year == 1978 || year == 1990 || year == 2002 || year == 2014 || year == 2026) {
    sign = "Horse";
    yinyang = "Yang";
    branch = "午";
  }  else if (year == 1931 || year == 1943 || year == 1955 || year == 1967 || year == 1979 || year == 1991 || year == 2003 || year == 2015 || year == 2027) {
    sign = "Goat";
    yinyang = "Yin";
    branch = "未";
  }  else if (year == 1932 || year == 1944 || year == 1956 || year == 1968 || year == 1980 || year == 1992 || year == 2004 || year == 2016 || year == 2028) {
    sign = "Monkey";
    yinyang = "Yang";
    branch = "申";
  }  else if (year == 1933 || year == 1945 || year == 1957 || year == 1969 || year == 1981 || year == 1993 || year == 2005 || year == 2017 || year == 2029) {
    sign = "Rooster";
    yinyang = "Yin";
    branch = "酉";
  }  else if (year == 1934 || year == 1946 || year == 1958 || year == 1970 || year == 1982 || year == 1994 || year == 2006 || year == 2018 || year == 2030) {
    sign = "Dog";
    yinyang = "Yang";
    branch = "戌";
  }  else if (year == 1935 || year == 1947 || year == 1959 || year == 1971 || year == 1983 || year == 1995 || year == 2007 || year == 2019 || year == 2031) {
    sign = "Pig";
    yinyang = "Yin";
    branch = "亥";
  }
  
}

function eLement() {
  //wood
  if (year == 1924 || year == 1925 || year == 1934 || year == 1935 || year == 1944 || year == 1945 || year == 1954 || year == 1955 || year == 1964 || year == 1965 || year == 1974 || year == 1975 || year == 1984 || year == 1985 || year == 1994 || year == 1995 || year == 2004 || year == 2005 || year == 2014 || year == 2015 || year == 2024 || year == 2025) {
    element = "Wood";
    
  }  else if (year == 1926 || year == 1927 || year == 1936 || year == 1937 || year == 1946 || year == 1947 || year == 1956 || year == 1957 || year == 1966 || year == 1967 || year == 1976 || year == 1977 || year == 1986 || year == 1987 || year == 1996 || year == 1997 || year == 2006 || year == 2007 || year == 2016 || year == 2017 || year == 2026 || year == 2027) {
    element = "Fire";
    
  }  else if (year == 1928 || year == 1929 || year == 1938 || year == 1939 || year == 1948 || year == 1949 || year == 1958 || year == 1959 || year == 1968 || year == 1969 || year == 1978 || year == 1979 || year == 1988 || year == 1989 || year == 1998 || year == 1999 || year == 2008 || year == 2009 || year == 2018 || year == 2019 || year == 2028 || year == 2029) {
    element = "Earth";
    
  }  else if (year == 1930 || year == 1931 || year == 1940 || year == 1941 || year == 1950 || year == 1951 || year == 1960 || year == 1961 || year == 1970 || year == 1971 || year == 1980 || year == 1981 || year == 1990 || year == 1991 || year == 2000 || year == 2001 || year == 2010 || year == 2011 || year == 2020 || year == 2021 || year == 2030 || year == 2031) {
    element = "Metal";
    
  }  else if (year == 1932 || year == 1933 || year == 1942 || year == 1943 || year == 1952 || year == 1953 || year == 1962 || year == 1963 || year == 1972 || year == 1973 || year == 1982 || year == 1983 || year == 1992 || year == 1993 || year == 2002 || year == 2003 || year == 2012 || year == 2013 || year == 2022 || year == 2023 || year == 2032 || year == 2033) {
    element = "Water";
    
  }

}

function sTem() {
  //甲
  if (year == 1924 || year == 1934 || year == 1944 || year == 1954 || year == 1964 || year == 1974 || year == 1984 || year == 1994 || year == 2004 || year == 2014 || year == 2024) {
    stem = "甲";
    
  }  else if (year == 1925 || year == 1935 || year == 1945 || year == 1955 || year == 1965 || year == 1975 || year == 1985 || year == 1995 || year == 2005 || year == 2015 || year == 2025) {
    stem = "乙";
    
  }  else if (year == 1926 || year == 1936 || year == 1946 || year == 1956 || year == 1966 || year == 1976 || year == 1986 || year == 1996 || year == 2006 || year == 2016 || year == 2026) {
    stem = "丙";
    
  }  else if (year == 1927 || year == 1937 || year == 1947 || year == 1957 || year == 1967 || year == 1977 || year == 1987 || year == 1997 || year == 2007 || year == 2017 || year == 2027) {
    stem = "丁";
    
  }  else if (year == 1928 || year == 1938 || year == 1948 || year == 1958 || year == 1968 || year == 1978 || year == 1988 || year == 1998 || year == 2008 || year == 2018 || year == 2028) {
    stem = "戊";
    
  }  else if (year == 1929 || year == 1939 || year == 1949 || year == 1959 || year == 1969 || year == 1979 || year == 1989 || year == 1999 || year == 2009 || year == 2019 || year == 2029) {
    stem = "己";
    
  }  else if (year == 1930 || year == 1940 || year == 1950 || year == 1960 || year == 1970 || year == 1980 || year == 1990 || year == 2000 || year == 2010 || year == 2020 || year == 2030) {
    stem = "庚";
    
  }  else if (year == 1931 || year == 1941 || year == 1951 || year == 1961 || year == 1971 || year == 1981 || year == 1991 || year == 2001 || year == 2011 || year == 2021|| year == 2031) {
    stem = "辛";
    
  }  else if (year == 1932 || year == 1942 || year == 1952 || year == 1962 || year == 1972 || year == 1982 || year == 1992 || year == 2002 || year == 2012 || year == 2022 || year == 2032) {
    stem = "壬";
    
  }  else if (year == 1933 || year == 1943 || year == 1953 || year == 1963 || year == 1973 || year == 1983 || year == 1993 || year == 2003 || year == 2013 || year == 2023 || year == 2033) {
    stem = "癸";
    
  }
  
}

function signpage() {
  if (sign == "Rat") {
    setScreen("Rat_sign");
    
  } else if (sign == "Ox"){
    setScreen("Ox_sign");
    
  } else if (sign == "Tiger"){
    setScreen("Tiger_Sign");
    
  } else if (sign == "Rabbit"){
    setScreen("Rabbit_sign");
    
  } else if (sign == "Dragon"){
    setScreen("Dragon_sign");
    
  } else if (sign == "Snake"){
    setScreen("Snake_sign");
    
  } else if (sign == "Horse"){
    setScreen("Horse_sign");
    
  } else if (sign == "Goat"){
    setScreen("Goat_sign");
    
  } else if (sign == "Monkey"){
    setScreen("Monkey_sign");
    
  } else if (sign == "Rooster"){
    setScreen("Rooster_sign");
    
  } else if (sign == "Dog"){
    setScreen("Dog_sign");
    
  } else if (sign == "Pig"){
    setScreen("Pig_sign");
    
  }
  
}
