public class q2_prefixSuffix {
    public static void main(String[] args) {
        String str  = "aaaa";
        StringBuilder s1= new StringBuilder("");
        StringBuilder s2 = new StringBuilder("");
        int j = str.length()-1;
        int i= 0;
        int maxLen = 0;
        while(i<j){
            s1.append(str.charAt(i));
            s2.insert(0, str.charAt(j));
            if(s1.toString().contentEquals(s2)){
                maxLen = Math.max(s1.length(), maxLen);
            }

            i++;
            j--;
        }
        if(maxLen>0){
            System.out.println("MaxLen " +maxLen + " String " + s1);
        } else {
            System.out.println("Not prefix Suffix Found");
        }
    }
}
