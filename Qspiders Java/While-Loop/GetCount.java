public class GetCount {
    public static int getCount(int n){
        int count = 0;
        while (n>0) {
            count++;
            n/=10;
        }
        return count;
    }
    public static void main(String[] args) {
        System.out.println(getCount(434343));
    }
}