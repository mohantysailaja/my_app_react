using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices;
using System.Runtime.Versioning;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1
{
    public class Program
    {

        private string model, color, steering, brand, feature;

        //declaring constructor here with the same name as class
        // Create a  constructor for the Program class
        public Program()
        {
            model = "Hyndai-i-30";
            color = "red";
            steering = "right";
            brand = "Hyundai";
            feature = "Auto pilot";
        }
        //created a new class named testJson and accessing 
        public class testJson
            {
            public int id;
            public string name;
            public string dependency;

            //creating consrtuctor
            public testJson()
            {
                this.id = 1;
                this.name = "test";
                this.dependency = "yes";
            }
            

        }
        public static void Main(string[] args)
        {
            testJson objJson = new testJson();//created object for the testJson class
            Console.WriteLine(objJson.name);//printed and tested
            //foreach (string i in objJson)
            //{
            //    Console.WriteLine(i);
            //}
            //array
            string[] myArray = new string[] {"flowers" ,"roses","daffodils","dandeleon","dailsy"};
            Console.WriteLine(myArray.Length);

            foreach (string i in  myArray)
            {
                Console.WriteLine(i);
            }
           // Console.WriteLine(myArray[0]);//for one line console print//
            //ends here

            /*for loop
            for (int i =0;i <=5;i ++)
            {
                Console.WriteLine(myArray[i]);
            }
            */
            //ends here
            //Linkedlist
            string[] words = { "the", "fox", "jumps", "over", "the", "dog" };

            LinkedList<string> listsentence = new LinkedList<string>(words);
            foreach(string word in listsentence)
            {
                Console.WriteLine(word);
            }
            
            //ends here

            //Arraylist
            ArrayList myAL = new ArrayList();
            myAL.Add(1);
            myAL.Add(2);
            myAL.Add(3);        
            Console.WriteLine(myAL);
            //ends here

            //Array and queue
            string[] courses = { "MCA", "MBA", "BCA", "BTECH", "MTECH" };
            Queue<string> myqueue = new Queue<string>(courses);
            myqueue.Enqueue("PHD");//added PHD in to the array
            
            //ends here

            //using enqueue and dequeue
            Queue<string> numbers = new Queue<string>();
            numbers.Enqueue("one");
            numbers.Enqueue("two");
            numbers.Enqueue("three");
            numbers.Enqueue("four");

            foreach(string number in  numbers)
            {
                Console.WriteLine(number);
            }
            Console.WriteLine(numbers.Peek());//output ??
           // numbers.Peek();
            Console.WriteLine(numbers);
            //ends here



            //using stack 
            Stack<int> stack = new Stack<int>(new int[] {1,2,3,4,5,6,7});
            stack.Push(1);
            stack.Push(2);
            stack.Push(3);
            stack.Push(4);
            stack.Push(5);
            foreach (object obj in stack)
            {
                Console.WriteLine(obj);
            }
            Console.WriteLine(stack.Pop());
            Console.WriteLine("Does the stack contain the elements 3 " + stack.Contains(3));


            //https://app.coderpad.io/X6GWJX4Q
            // Create a new queue from an integer array

            Queue<int> myQueue = new Queue<int>();
            //Queue<int> myQueue = new Queue<int>(new int[] {1,2,3,4,5,6,7});
            
            myQueue.Enqueue(1);
            myQueue.Enqueue(2);
            myQueue.Enqueue(3);
            myQueue.Enqueue(4);
            Console.WriteLine(myQueue.Count);//output -7 



            Program myObj = new Program();//create an object of the class 
            Console.WriteLine(myObj.model);
            Console.WriteLine(myObj.color);
            Console.WriteLine(myObj.steering);
            Console.WriteLine(myObj.brand);
            Console.WriteLine(myObj.feature);
            //for loop
            for (int i = 0; i < 10; i++)
            {
                Console.WriteLine(i);

                //ends here
                //foreach loop
                string[] cars = { "Volvo", "BMW", "Ford", "Mazda" };
                foreach (string j in cars)
                {
                    Console.WriteLine(j);
                }
                //ends here
            }
        }


    }
}