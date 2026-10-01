public class SlidingWindow{
    public static void main(String[]args){
        
t
        int [] input = {2,1,5,6,2,1};
        int [] input2 = {11,5,4,5,1,9,2,20};

    }

    public static int [] slidingWindow(int [] userInput) {
        int largest = -1;
        int [] newArray = new int[userInput.length];

        for (int position = 0; position < userInput.length; position++) {
            int addition = userInput[position] + userInput[position + 1] + userInput[position + 2];
            if( addition > largest){
            largest = addition;
            newArray = {userInput[position], userInput[position + 1], userInput[position + 2]};
            }
        }
        return newArray;
        }

        System.out.println(Arrays.toString(slidingWindow(input2)));

}
