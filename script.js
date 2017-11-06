function findHoro(){
    x = document.getElementById("day").value;
    x = parseInt(x);
    y = document.getElementById("month").value;
    y = parseInt(y);
    z = document.getElementById("year").value;
    z = parseInt(z);
    n = document.getElementById("name").value;
    document.getElementById("horoscope").innerHTML = returnHoro(x,y);
    document.getElementById("horoImg").innerHTML = horoscopeImg();
    document.getElementById("message").innerHTML = horoscopeMsg();
    document.getElementById("zodiac").innerHTML = zodiac();
    document.getElementById("zodiacImg").innerHTML = zodiacImg();
}
function returnHoro(x,y){
    if(y === 0 && x === 0){
        return "Please Select A Month And Day";
    }
    if(y === 0 ){
        return "Please Select A Month";
    }
    if(x === 0){
        return "Please Select A Day";
    }
    if(y === 1 && x >= 20 || y === 2 && x <= 18) {
        horo = 1;
        return "You Are An Aquarius!";
    }
    if(y === 2 && x >= 19 && x <= 29 || y === 3 && x <= 20) {
        horo = 2;
        return "You Are A Pisces!";
    }
    if(y === 3 && x >= 21 || y === 4 && x <= 19){
        horo = 3;
        return "You Are An Aries!";
    }
    if(y === 4 && x >= 20 && x <= 30 || y === 5 && x <= 20){
        horo = 4;
        return "You Are A Taurus!";
    }
    if(y === 5 && x >= 21 || y === 6 && x <= 20){
        horo = 5;
        return "You Are A Gemini!";
    }
    if(y === 6 && x >= 21 && x <= 30 || y === 7 && x <= 22){
        horo = 6;
        return "You Are A Cancer!";
    }
    if(y === 7 && x >= 23 || y === 8 && x <= 22){
        horo = 7;
        return "You Are A Leo!";
    }
    if(y === 8 && x >= 23 || y === 9 && x<= 22){
        horo = 8;
        return "You Are A Virgo!";
    }
    if(y === 9 && x >= 23 && x <= 30 || y === 10 && x <= 22){
        horo = 9;
        return "You Are A Libra!";
    }
    if(y === 10 && x >= 23 || y === 11 && x <=21){
        horo = 10;
        return "You Are A Scorpio!";
    }
    if(y === 11 && x >= 22 && x <= 30 || y === 12 && x <= 21){
        horo = 11;
        return "You Are A Sagittarius!";
    }
    if (y === 12 && x >= 22 || y === 1 && x <= 19) {
        horo = 12;
        return "You Are A Capricorn!";
    }
    return "Invalid Date, Try Again.";
}
function horoscopeImg(){
    if(horo === 1){
        return "<img src='Img/Aquarius.png'/>";
    }
    if(horo === 2){
        return "<img src='Img/Pisces.png'/>";
    }
    if(horo === 3){
        return "<img src='Img/Aries.png'/>";
    }
    if(horo === 4){
        return "<img src='Img/Taurus.png'/>";
    }
    if(horo === 5){
        return "<img src='Img/Gemini.png'/>";
    }
    if(horo === 6){
        return "<img src='Img/Cancer.png'/>";
    }
    if(horo === 7){
        return "<img src='Img/Leo.png'/>";
    }
    if(horo === 8){
        return "<img src='Img/Virgo.png'/>";
    }
    if(horo === 9){
        return "<img src='Img/Libra.png'/>";
    }
    if(horo === 10){
        return "<img src='Img/Scorpio.png'/>";
    }
    if(horo === 11){
        return "<img src='Img/Sagittarius.png'/>";
    }
    if(horo === 12){
        return "<img src='Img/Capricorn.png'/>";
    }
}
function zodiac(){
    if(z === 2013 || z === 2001 || z === 1989 || z === 1977 || z === 1965){
        return "You Are A Snake";
    }
    if(z === 2010 || z === 1998 || z === 1986 || z === 1974 || z === 1962){
        return "You Are A Tiger";
    }
    if(z === 2006 || z === 1994 || z === 1982 || z === 1970 || z === 1958){
        return "You Are A Dog";
    }
    if(z === 2012 || z === 2000 || z === 1988 || z === 1976 || z === 1964){
        return "You Are A Dragon";
    }
    if(z === 2014 || z === 2002 || z === 1990 || z === 1978 || z === 1966){
        return "You Are A Horse";
    }
    if(z === 2016 || z === 2004 || z === 1992 || z === 1980 || z === 1968){
        return "You Are A Monkey";
    }
    if(z === 2009 || z === 1997 || z === 1985 || z === 1973 || z === 1961){
        return "You Are An Ox";
    }
    if(z === 2007 || z === 1995 || z === 1983 || z === 1971 || z === 1959){
        return "You Are A Pig";
    }
    if(z === 2011 || z === 1999 || z === 1987 || z === 1975 || z === 1963){
        return "You Are A Rabbit";
    }
    if(z === 2008 || z === 1996 || z === 1984 || z === 1972 || z === 1960){
        return "You Are A Rat";
    }
    if(z === 2017 || z === 2005 || z === 1993 || z === 1981 || z === 1969){
        return "You Are A Rooster";
    }
    if(z === 2015 || z === 2003 || z === 1991 || z === 1979 || z === 1967){
        return "You Are A Sheep";
    }

}
function zodiacImg(){
    if(z === 2013 || z === 2001 || z === 1989 || z === 1977 || z === 1965){
       return "<img src='Zodiac Year Img/snake.png'/>";
    }
    if(z === 2010 || z === 1998 || z === 1986 || z === 1974 || z === 1962){
        return "<img src='Zodiac Year Img/tiger.png'/>";
    }
    if(z === 2006 || z === 1994 || z === 1982 || z === 1970 || z === 1958){
        return "<img src='Zodiac Year Img/dog.png'/>";
    }
    if(z === 2012 || z === 2000 || z === 1988 || z === 1976 || z === 1964){
        return "<img src='Zodiac Year Img/dragon.png'/>";
    }
    if(z === 2014 || z === 2002 || z === 1990 || z === 1978 || z === 1966){
        return "<img src='Zodiac Year Img/horse.png'/>";
    }
    if(z === 2016 || z === 2004 || z === 1992 || z === 1980 || z === 1968){
        return "<img src='Zodiac Year Img/monkey.png'/>";
    }
    if(z === 2009 || z === 1997 || z === 1985 || z === 1973 || z === 1961){
        return "<img src='Zodiac Year Img/ox.png'/>";
    }
    if(z === 2007 || z === 1995 || z === 1983 || z === 1971 || z === 1959){
        return "<img src='Zodiac Year Img/pig.png'/>";
    }
    if(z === 2011 || z === 1999 || z === 1987 || z === 1975 || z === 1963){
        return "<img src='Zodiac Year Img/rabbit.png'/>";
    }
    if(z === 2008 || z === 1996 || z === 1984 || z === 1972 || z === 1960){
        return "<img src='Zodiac Year Img/rat.png'/>";
    }
    if(z === 2017 || z === 2005 || z === 1993 || z === 1981 || z === 1969){
        return "<img src='Zodiac Year Img/rooster.png'/>";
    }
    if(z === 2015 || z === 2003 || z === 1991 || z === 1979 || z === 1967){
        return "<img src='Zodiac Year Img/sheep.png'/>";
    }

}
function horoscopeMsg(){
    if(horo === 1){
        return "Dear "+n+", "+"Your career is like a rocket ship on the launch pad now, and your optimism can propel you to new heights. Although all systems have been meticulously checked and are in working order, you still need to decide on a destination. Fortunately, you know more about your goal than ever before, even if you haven’t revealed it to anyone yet. Announce your plans so you can be cleared for take-off while the cosmos is offering clear skies and the promise of the wind beneath your wings";
    }
    if(horo === 2){
        return "Dear "+n+", "+"You spend a lot of time projecting your current situation into the future, playing out every possible scenario in your mind now. In fact, you could become obsessive as you try to increase the odds of your success, operating as if your life is a casino game of chance. Although the Sun’s conjunction with lucky Jupiter is a fortuitous sign, you’re not home free yet. Assume the best, but don’t be surprised if there are a few unexpected twists and turns along the way. Dr. Martin Luther King Jr. said, “We must accept finite disappointment, but never lose infinite hope.";
    }
    if(horo === 3){
        return "Dear "+n+", "+"You’re not satisfied easily today because you’re so sure of your destiny that you’ll do nearly anything to fulfill it. You can visualize a best-case scenario and can’t wait to put your plan into motion. Although there may be other people involved who have a variety of conflicting issues, you believe you intuitively know how to steer the group in your direction. Unfortunately, you could achieve your goals while creating chaos in the process. Consider the price you’re willing to pay for success before you embark on a course you might later regret.";
    }
    if(horo === 4){
        return "Dear "+n+", "+"Someone may present you with the proverbial deal you can’t refuse today. An offer could look so good on paper that you want to say yes before reading the fine print. Luckily, the opportunity might actually turn out to be as awesome as it appears. Nevertheless, doing due diligence is always prudent when stepping into unknown territory. Once you have uncovered all relevant information, you will be in a better position to make the smartest choice. Fortune favors the bold.";
    }
    if(horo === 5){
        return "Dear "+n+", "+"Your physical well being is on your mind today, whether you’re feeling under the weather or just looking for an energetic boost. Thankfully, a propitious Sun-Jupiter conjunction blesses your 6th House of Self-Improvement, all but ensuring positive results from any changes you make now. Although you might have a clear idea of what your perfect regimen entails, there are experts who can offer sound advice to help you on your path. Your vitality is at stake, so thoroughly investigate your options before selecting a new lifestyle trend that may or may not work. Your health is your wealth.";
    }
    if(horo === 6){
        return "Dear "+n+", "+"You don’t want to waste your precious time fending off the manipulative behavior of someone at work. Confronting the person won’t likely help now; they’ll just deny your accusations or take the position that they’re doing it for your own good. Thankfully, you have a secret defensive weapon in your arsenal that doesn’t involve direct conflict. In every moment, you can choose an action that spreads good will instead of fear or anger. Make love, not war.";
    }
    if(horo === 7){
        return "Dear "+n+", "+"There may be an impossible list of chores that must be finished today, and you don’t know if you’re feeling up to the task. Nevertheless, your stamina is strong and you might even surprise yourself with what you can do now. There’s no need to proclaim your superiority or get swept up in an old drama. Just quietly go about your business while methodically focusing the best of your intentions onto your immediate environment. Work hard in silence; let your success be your noise.";
    }
    if(horo === 8){
        return "Dear "+n+", "+"Your practical sense of reality informs nearly every aspect of your behavior. You might harbor extreme feelings about someone close to you today, but you don’t want to say anything negative because you think it will reflect badly on you. Nevertheless, avoidance is not a strategy that works for anyone involved now. Calmly express your anger before it transforms into resentment, which makes matters much more complicated to resolve in the long run. Author Fiona Childs wrote, “Be kind, be honest, be loving, be true and all these things will come back to you.”";
    }
    if(horo === 9){
        return "Dear "+n+", "+"Paradoxically, your self-esteem soars today, but you still may need to face your insecurities. You’re confident of your capabilities on the job and can create a strategic ladder that will carry you to the top of your field. However, your feelings stand on shakier ground now, and you might slip into the underworld for a remedial course on the magic of emotional transformation. Whatever happens, maintain your balance. Standing on the border between worlds requires serious concentration, but the rewards are worth the risks.";
    }
    if(horo === 10){
        return "Dear "+n+", "+"You move through the day with exaggerated emotions and behaviors that are symptoms of your larger-than-life approach to everything. An auspicious Sun-Jupiter conjunction occurs in your sign every twelve years, opening the floodgates of opportunity and inspiring you with such confidence that you believe anything is possible. But there’s still a nagging sound of the tiniest alarm of self-doubt ringing in the back of your head. Your accomplishments speak for themselves; take on the world with a humble heart and a can-do spirit.";
    }
    if(horo === 11){
        return "Dear "+n+", "+"Your favorite tune comes wafting through the cosmos today, and nothing will prevent you from singing along. The Sun’s annual conjunction with your key planet Jupiter is a beacon of hope that inspires you to live your life according to your highest ideals. However, shining your light in the right direction doesn’t automatically mean you will reach your destination. Nevertheless, your word is sacrosanct; skipping out on your commitments is not an option. False promises hurt.";
    }
    if(horo === 12){
        return "Dear "+n+", "+"You can see right through someone’s negativity today, like a cosmic ray passing directly through a wall. The take-no-prisoners Moon-Pluto conjunction lands in your pragmatic sign, making you a passionate catalyst for change wherever you go. The good news is you don’t even slow down when confronted with unwarranted criticism. Unfortunately, the bad news is you may ignore crucial feedback that could increase your efficiency and improve your chances of manifesting your ideal future. Humility is the secret ingredient of success.";
    }
}