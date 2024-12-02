// Function to fetch the weather data
async function fetchWeather(zipCode) {
    const apiKey = '3d44767fee41af418e6d0d6ec40b7920'; // Replace with your OpenWeather API key
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=${apiKey}&units=imperial`;
  
    try {
      const response = await fetch(weatherUrl);
      if (response.ok) {
        const data = await response.json();
        // Update weather information
        document.getElementById('location').textContent = data.name || 'Unknown Location';
        document.getElementById('temperature').textContent = `${Math.round(data.main.temp)}°`;
        const weatherIcon = getWeatherIcon(data.weather[0].main.toLowerCase());
        document.getElementById('weather-icon').src = `../assets/${weatherIcon}.png`;
        document.getElementById('weather-icon').alt = data.weather[0].description;
      } else {
        throw new Error('Failed to fetch weather data');
      }
    } catch (error) {
      console.error('Error fetching weather data:', error);
      document.getElementById('location').textContent = 'Weather data unavailable';
      document.getElementById('temperature').textContent = '--°';
    }
  }
  
  // Helper function to map weather types to icon names
  function getWeatherIcon(weatherMain) {
    switch (weatherMain) {
      case 'clear':
        return 'sunny';
      case 'clouds':
        return 'cloudy';
      case 'rain':
        return 'rainy';
      case 'snow':
        return 'snowy';
      default:
        return 'default';
    }
  }
  
  // Array of 366 Stoic quotes
  const stoicQuotes = [
    "Waste no more time arguing about what a good man should be. Be one. — Marcus Aurelius",
    "You have power over your mind - not outside events. Realize this, and you will find strength. — Marcus Aurelius",
    "The happiness of your life depends upon the quality of your thoughts. — Marcus Aurelius",
    "If it is not right, do not do it; if it is not true, do not say it. — Marcus Aurelius",
    "The best revenge is not to be like your enemy. — Marcus Aurelius",
    "He who fears death will never do anything worth of a man who is alive. — Seneca",
    "It is not the man who has too little, but the man who craves more, that is poor. — Seneca",
    "Luck is what happens when preparation meets opportunity. — Seneca",
    "Begin at once to live, and count each separate day as a separate life. — Seneca",
    "We suffer more often in imagination than in reality. — Seneca",
    "Man conquers the world by conquering himself. — Zeno of Citium",
    "No man is free who is not master of himself. — Epictetus",
    "First say to yourself what you would be; and then do what you have to do. — Epictetus",
    "It's not what happens to you, but how you react to it that matters. — Epictetus",
    "Wealth consists not in having great possessions, but in having few wants. — Epictetus",
    "Don't explain your philosophy. Embody it. — Epictetus",
    "The more we value things outside our control, the less control we have. — Epictetus",
    "Attach yourself to what is spiritually superior, regardless of what other people think or do. Hold to your true aspirations no matter what is going on around you. — Epictetus",
    "How long are you going to wait before you demand the best for yourself? — Epictetus",
    "You become what you give your attention to. — Epictetus",
    "Freedom is the only worthy goal in life. It is won by disregarding things that lie beyond our control. — Epictetus",
    "Circumstances don't make the man, they only reveal him to himself. — Epictetus",
    "He who has a why to live can bear almost any how. — Friedrich Nietzsche",
    "To be calm is the highest achievement of the self. — Zen proverb",
    "The whole future lies in uncertainty: live immediately. — Seneca",
    "To bear trials with a calm mind robs misfortune of its strength and burden. — Seneca",
    "Difficulties strengthen the mind, as labor does the body. — Seneca",
    "The greater the difficulty, the more glory in surmounting it. — Epicurus",
    "A gem cannot be polished without friction, nor a man perfected without trials. — Seneca",
    "You could leave life right now. Let that determine what you do and say and think. — Marcus Aurelius",
    "Death smiles at us all; all we can do is smile back. — Marcus Aurelius",
    "Accept whatever comes to you woven in the pattern of your destiny, for what could more aptly fit your needs? — Marcus Aurelius",
    "Do every act of your life as though it were the very last act of your life. — Marcus Aurelius",
    "It never ceases to amaze me: we all love ourselves more than other people, but care more about their opinion than our own. — Marcus Aurelius",
    "The impediment to action advances action. What stands in the way becomes the way. — Marcus Aurelius",
    "He who lives in harmony with himself lives in harmony with the universe. — Marcus Aurelius",
    "Stop drifting. Sprint for the finish. Write off your hopes, and if your well-being matters to you, be your own savior while you can. — Marcus Aurelius",
    "You don’t have to turn this into something. It doesn’t have to upset you. — Marcus Aurelius",
    "Think of the life you have lived until now as over and, as a dead man, see what’s left as a bonus and live it according to nature. — Marcus Aurelius",
    "You can commit injustice by doing nothing. — Marcus Aurelius",
    "To live is to suffer, to survive is to find some meaning in the suffering. — Friedrich Nietzsche",
    "We are more often frightened than hurt; and we suffer more from imagination than from reality. — Seneca",
    "The man who has anticipated the coming of troubles takes away their power when they arrive. — Seneca",
    "Set aside a certain number of days, during which you shall be content with the scantiest and cheapest fare, with coarse and rough dress, saying to yourself all the while: Is this the condition that I feared? — Seneca",
    "True happiness is... to enjoy the present, without anxious dependence upon the future. — Seneca",
    "A man is as unhappy as he has convinced himself he is. — Seneca",
    "Associate with those who will make a better man of you. — Seneca",
    "Throw me to the wolves and I will return leading the pack. — Seneca",
    "As is a tale, so is life: not how long it is, but how good it is, is what matters. — Seneca",
    "The wise man avoids all extremes. — Seneca",
    "An angry man opens his mouth and shuts his eyes. — Cato the Younger",
    "The greater the soul, the deeper the wounds. — Cato the Younger",
    "The happiness of your life depends upon the quality of your thoughts. — Marcus Aurelius",
    "You are a little soul carrying around a corpse. — Epictetus",
    "Do not indulge in dreams of having what you have not, but reckon up the chief of the blessings you do possess, and then thankfully remember how you would crave for them if they were not yours. — Marcus Aurelius",
    "Do not seek for things to happen the way you want them to; rather, wish that what happens happen the way it happens: then you will be happy. — Epictetus",
    "The best answer to anger is silence. — Marcus Aurelius",
    "No man can have a peaceful life who thinks too much about lengthening it. — Seneca",
    "A fit body, a calm mind, a house full of love. These things cannot be bought—they must be earned. — Naval Ravikant",
    "Be like the cliff against which the waves continually break; but it stands firm and tames the fury of the water around it. — Marcus Aurelius",
    "Every man I meet is my master in some point, and in that I learn of him. — Ralph Waldo Emerson",
    "Don’t let your reflection on the whole sweep of life crush you. Forget everything else. Keep hold of this alone and make it your priority: to act as a good person in whatever you’re doing. — Marcus Aurelius",
    "People are not disturbed by things, but by the views they take of them. — Epictetus",
    "To be even-minded is the greatest virtue. — Heraclitus",
    "He who angers you conquers you. — Epictetus",
    "How ridiculous and how strange to be surprised at anything which happens in life. — Marcus Aurelius",
    "Look back over the past, with its changing empires that rose and fell, and you can foresee the future too. — Marcus Aurelius",
    "Everything that happens happens as it should, and if you observe carefully, you will find this to be so. — Marcus Aurelius",
    "If you are distressed by anything external, the pain is not due to the thing itself but to your estimate of it; and this you have the power to revoke at any moment. — Marcus Aurelius",
    "Be tolerant with others and strict with yourself. — Marcus Aurelius",
    "Look well into thyself; there is a source of strength which will always spring up if thou wilt always look. — Marcus Aurelius",
    "Receive without conceit, release without struggle. — Marcus Aurelius",
    "Men are disturbed not by things, but by the views which they take of them. — Epictetus",
    "The art of living is more like wrestling than dancing. — Marcus Aurelius",
    "It is not death that a man should fear, but he should fear never beginning to live. — Marcus Aurelius",
    "Do not waste the remaining part of your life in thoughts about others, when you do not refer your thoughts to some object of common utility. — Marcus Aurelius",
    "Consider that before long you will be nobody and nowhere. — Marcus Aurelius",
    "Nothing is enough for the man to whom enough is too little. — Epicurus",
    "It is not what happens to you, but how you react to it that matters. — Epictetus",
    "Never let the future disturb you. You will meet it, if you have to, with the same weapons of reason which today arm you against the present. — Marcus Aurelius",
    "Don’t demand that things happen as you wish, but wish that they happen as they do happen, and you will go on well. — Epictetus",
    "If you seek tranquility, do less. Or (more accurately) do what’s essential—what the logos of a social being requires, and in the requisite way. — Marcus Aurelius",
    "Do not act as if you were going to live ten thousand years. Death hangs over you. While you live, while it is in your power, be good. — Marcus Aurelius",
    "Be content to seem what you really are. — Marcus Aurelius",
    "To refrain from imitation is the best revenge. — Marcus Aurelius",
    "Nothing happens to any man that he is not formed by nature to bear. — Marcus Aurelius",
    "It is not events themselves that disturb people, but only their judgments about them. — Epictetus",
    "The obstacle is the way. — Marcus Aurelius",
    "Wealth consists not in having great possessions, but in having few wants. — Epictetus",
    "He who has a why to live can bear almost any how. — Friedrich Nietzsche",
    "What stands in the way becomes the way. — Marcus Aurelius",
    "A man who has committed a mistake and doesn't correct it is committing another mistake. — Confucius",
    "Let us train our minds to desire what the situation demands. — Epictetus",
    "The greatest wealth is to live content with little. — Plato",
    "It is not death that a man should fear, but he should fear never beginning to live. — Marcus Aurelius",
    "Our life is what our thoughts make it. — Marcus Aurelius",
    "Your life is your own; rise up and live it. — Marcus Aurelius",
    "Difficulties strengthen the mind, as labor does the body. — Seneca",
    "Luck is what happens when preparation meets opportunity. — Seneca",
    "The more we value things outside our control, the less control we have. — Epictetus",
    "The best revenge is to be unlike him who performed the injury. — Marcus Aurelius",
    "It is not the man who has too little, but the man who craves more, that is poor. — Seneca",
    "He who is brave is free. — Seneca",
    "You must learn a new way to think before you can master a new way to be. — Marianne Williamson",
    "Things are not bad in themselves, but our opinions about things are. — Epictetus",
    "Time is a great healer, but a poor beautician. — Lucille Ball",
    "It is not how old you are, but how you are old. — Jules Renard",
    "Don't aim to be perfect, aim to be better. — Marcus Aurelius",
    "Man conquers the world by conquering himself. — Zeno of Citium",
    "He who is not a good servant will not be a good master. — Plato",
    "A person is not a great person because they have succeeded, but because they have shown the virtue to overcome adversity. — Epictetus",
    "Self-control is strength. Right thought is mastery. Calmness is power. — James Allen",
    "The greatest part of our happiness depends on our dispositions, not our circumstances. — Martha Washington",
    "You become what you give your attention to. — Epictetus",
    "To be calm is the highest achievement of the self. — Buddha",
    "If it is not right, do not do it; if it is not true, do not say it. — Marcus Aurelius",
    "The mind that is anxious about future events is miserable. — Seneca",
    "Wisdom begins in wonder. — Socrates",
    "Silence is a source of great strength. — Lao Tzu",
    "Live as if you were to die tomorrow. Learn as if you were to live forever. — Mahatma Gandhi",
    "It is not things themselves that disturb us, but our opinions about them. — Epictetus",
    "Do not spoil what you have by desiring what you have not. — Epicurus",
    "Don’t be afraid to give up the good to go for the great. — John D. Rockefeller",
    "The unexamined life is not worth living. — Socrates",
    "A person who never made a mistake never tried anything new. — Albert Einstein",
    "Don’t judge each day by the harvest you reap, but by the seeds that you plant. — Robert Louis Stevenson",
    "You will not be punished for your anger, you will be punished by your anger. — Buddha",
    "You are your choices. — Wayne Dyer",
    "It's not what happens to you, but how you react to it that matters. — Epictetus",
    "He who is not content with what he has, would not be content with what he would like to have. — Socrates",
    "We suffer more often in imagination than in reality. — Seneca",
    "The best way to predict the future is to create it. — Abraham Lincoln",
    "The mind is everything. What you think you become. — Buddha",
    "A man is not good or bad because of the things he possesses, but because of the things he values. — Epictetus",
    "Remember that very little is needed to make a happy life. — Marcus Aurelius",
    "The only way to deal with this life meaningfully is to find one's passion. — Friedrich Nietzsche",
    "Begin at once to live, and count each separate day as a separate life. — Seneca",
    "Waste no more time arguing about what a good man should be. Be one. — Marcus Aurelius",
    "True love is the best thing in the world, but it is also the most difficult. — Aristotle",
    "Everything has its beauty, but not everyone sees it. — Confucius",
    "You can’t control what happens to you, but you can control your reaction to it. — Epictetus",
    "Do not spoil what you have by desiring what you don’t have. — Epicurus",
    "If you want to be rich, do not add to your money, but subtract from your desire. — Epictetus",
    "Nothing happens to any man that he is not equipped to handle. — Marcus Aurelius",
    "Time heals what reason cannot. — Seneca",
    "When the student is ready, the teacher will appear. — Buddha",
    "What we do now echoes in eternity. — Marcus Aurelius",
    "Look back over the past, with its changing empires that rose and fell, and you can foresee the future too. — Marcus Aurelius",
    "Wealth consists not in having great possessions, but in having few wants. — Epictetus",
    "Do what you will, even if it’s not what you would choose. — Marcus Aurelius",
    "Freedom is the only worthy goal in life. It is won by disregarding things that lie beyond our control. — Epictetus",
    "No man is free who is not master of himself. — Epictetus",
    "Happiness is not something ready-made. It comes from your own actions. — Dalai Lama",
    "When we are no longer able to change a situation, we are challenged to change ourselves. — Viktor Frankl",
    "The more you seek security, the less of it you will have. — Seneca",
    "What’s going on inside is more important than what’s going on outside. — Eckhart Tolle",
    "It’s not the years in your life that count, it’s the life in your years. — Abraham Lincoln",
    "Take care to get what you like or you will be forced to like what you get. — George Bernard Shaw",
    "Courage is not the absence of fear, but the triumph over it. — Nelson Mandela",
    "Life is what happens when you’re busy making other plans. — John Lennon",
    "Make the most of yourself, for that is all there is of you. — Ralph Waldo Emerson",
    "The only thing in our power is our own thoughts. — Epictetus",
    "A man’s true delight is to do the things he was made for. — Marcus Aurelius",
    "It is better to create than to learn! Creating is the essence of life. — Julius Caesar",
    "Injustice anywhere is a threat to justice everywhere. — Martin Luther King Jr.",
    "To live a good life: We have the potential for it. If we learn to be indifferent to what makes no difference. — Marcus Aurelius",
    "Don’t count the days, make the days count. — Muhammad Ali",
    "Whatever happens at all happens as it should; you will find this to be so if you watch narrowly. — Marcus Aurelius",
    "He who is brave is free. — Seneca",
    "Do not grieve over what has passed unless it makes you better. — Marcus Aurelius",
    "Happiness depends upon ourselves. — Aristotle",
    "You cannot teach a man anything; you can only help him find it within himself. — Galileo Galilei",
    "Be tolerant with others and strict with yourself. — Marcus Aurelius",
    "What we do now echoes in eternity. — Marcus Aurelius",
    "Do not waste time on what you cannot control. — Marcus Aurelius",
    "First say to yourself what you would be; and then do what you have to do. — Epictetus",
    "Fortune and love favor the brave. — Ovid",
    "If you’re going through hell, keep going. — Winston Churchill",
    "The more you have, the more you want. — Seneca",
    "The ultimate power in life is to be completely self-reliant, completely yourself. — Robert Greene",
    "You will change your life when you change your mindset. — Maxwell Maltz",
    "No man is free who is not master of himself. — Epictetus",
    "To live is the rarest thing in the world. Most people exist, that is all. — Oscar Wilde",
    "Wealth consists not in having great possessions, but in having few wants. — Epictetus",
    "You don’t have to be great to start, but you have to start to be great. — Zig Ziglar",
    "The life of a man is what his thoughts make of it. — Marcus Aurelius",
    "It is not the external world, but our thoughts that disturb us. — Epictetus",
    "It does not matter how slowly you go, as long as you do not stop. — Confucius",
    "The pain that you feel today is the strength that you feel tomorrow. — Anonymous",
    "When you stop chasing the wrong things, you give the right things a chance to catch you. — Lolly Daskal",
    "Wealth consists not in having great possessions, but in having few wants. — Epictetus",
    "Don’t look for a reason to be sad. — Epictetus",
    "You have power over your mind, not outside events. Realize this, and you will find strength. — Marcus Aurelius",
    "What we achieve inwardly will change outer reality. — Plutarch",
    "Nothing can harm you as much as your own thoughts unguarded. — Buddha",
    "The only thing in your control is your own actions. — Epictetus",
    "There is no greatness where there is no simplicity, goodness, and truth. — Leo Tolstoy",
    "The only way to deal with this life meaningfully is to find one's passion. — Friedrich Nietzsche",
    "Take time to deliberate, but when the time for action has arrived, stop thinking and go in. — Napoleon Bonaparte",
    "He who is not a good servant will not be a good master. — Plato",
    "The more we value things outside our control, the less control we have. — Epictetus",
    "A person who never made a mistake never tried anything new. — Albert Einstein",
    "The soul becomes dyed with the color of its thoughts. — Marcus Aurelius",
    "The goal of life is living in agreement with nature. — Zeno of Citium",
    "Man conquers the world by conquering himself. — Zeno of Citium",
    "Begin each day by saying to yourself: Today I will encounter people who are rude, selfish, and envious. — Epictetus",
    "It's not what happens to you, but how you react to it that matters. — Epictetus",
    "We are more often frightened than hurt; and we suffer more from imagination than from reality. — Seneca",
    "It’s not the years in your life that count, it’s the life in your years. — Abraham Lincoln",
    "Do not be wise in words, be wise in deeds. — Epictetus",
    "It is not the mountain we conquer, but ourselves. — Sir Edmund Hillary",
    "I cannot teach anybody anything. I can only make them think. — Socrates",
    "Those who are not true to themselves will never be true to others. — Epictetus",
    "There is no remedy for love but to love more. — Henry David Thoreau",
    "Time is what we want most but what we use worst. — William Penn",
    "Live as if you were to die tomorrow. Learn as if you were to live forever. — Mahatma Gandhi",
    "Simplicity is the ultimate sophistication. — Leonardo da Vinci",
    "He who has a why to live can bear almost any how. — Friedrich Nietzsche",
    "The more I read, the more I acquire, the more certain I am that I know nothing. — Voltaire",
    "Man is disturbed not by things, but by the view which he takes of them. — Epictetus",
    "If you want to fly, you have to give up the things that weigh you down. — Toni Morrison",
    "What we achieve inwardly will change outer reality. — Plutarch",
    "The only thing in your control is your own actions. — Epictetus",
    "Time is a great teacher, but unfortunately it kills all its pupils. — Louis Hector Berlioz",
    "He who is brave is free. — Seneca",
    "Don’t wait. The time will never be just right. — Napoleon Hill",
    "The good man is the one who, no matter how morally unworthy he has been, is making progress. — Confucius",
    "To be content with little is difficult, to be content with much is impossible. — Marie von Ebner-Eschenbach",
    "The obstacle on the path becomes the way. — Marcus Aurelius",
    "Every man is the architect of his own fortune. — Sallust",
    "The happiness of your life depends upon the quality of your thoughts. — Marcus Aurelius",
    "The unexamined life is not worth living. — Socrates",
    "Nothing is permanent, except change. — Heraclitus",
    "You are not a human being in search of a spiritual experience. You are a spiritual being immersed in a human experience. — Teilhard de Chardin",
    "He who has a why to live can bear almost any how. — Friedrich Nietzsche",
    "The past is beyond our control, but we can learn from it. — Marcus Aurelius",
    "It is not how old you are, but how you are old. — Jules Renard",
    "It does not matter how slowly you go as long as you do not stop. — Confucius",
    "If you’re not making mistakes, you’re not trying hard enough. — Vince Lombardi",
    "That which is not good for the bee-hive, cannot be good for the bees. — Marcus Aurelius",
    "The mind that is anxious about the future is miserable. — Seneca",
    "The goal of life is living in agreement with nature. — Zeno of Citium",
    "Don’t count the days, make the days count. — Muhammad Ali",
    "I am not what happened to me. I am what I choose to become. — Carl Jung",
    "There is no greatness where there is no simplicity, goodness, and truth. — Leo Tolstoy",
    "People are not disturbed by things, but by the view they take of them. — Epictetus",
    "If it is not right, do not do it; if it is not true, do not say it. — Marcus Aurelius",
    "A life without love is like a tree without blossoms or fruit. — Khalil Gibran",
    "Take a rest; a field that has rested gives a bountiful crop. — Ovid",
    "It is not what happens to you, but how you react to it that matters. — Epictetus",
    "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well. — Ralph Waldo Emerson",
    "Happiness is the highest good. — Aristotle",
    "Don’t waste time looking for an excuse; instead, find a way. — Nelson Mandela",
    "Be wary of the man who urges an action in which he himself incurs no risk. — Jofes of Rome",
    "All men are the same in their love of power, but the true test of power is how you treat others. — Mahatma Gandhi",
    "The only way to deal with this life meaningfully is to find one's passion. — Friedrich Nietzsche",
    "The greatest wealth is to live content with little. — Plato",
    "Man conquers the world by conquering himself. — Zeno of Citium",
    "True freedom is not in external circumstances, but in the way we choose to respond. — Epictetus",
    "Don’t wait for everything to be just right. — Napoleon Hill",
    "Memento mori: Remember you will die. — Ancient Roman Saying",
    "The best revenge is not to be like your enemy. — Marcus Aurelius",
    "Wealth consists not in having great possessions, but in having few wants. — Epictetus",
    "To love and be loved is to feel the sun from both sides. — David Viscott",
    "You don’t have to be great to start, but you have to start to be great. — Zig Ziglar",
    "He who is not a good servant will not be a good master. — Plato",
    "Silence is a source of great strength. — Lao Tzu",
    "Waste no more time arguing what a good man should be. Be one. — Marcus Aurelius",
    "Time is a great healer, but a poor beautician. — Lucille S. Harper",
    "Life is either a daring adventure or nothing at all. — Helen Keller",
    "A friend to all is a friend to none. — Aristotle",
    "Live as if you were to die tomorrow. Learn as if you were to live forever. — Mahatma Gandhi",
    "The supreme good is not in the circumstances, but in the choice. — Epictetus",
    "You must be the change you wish to see in the world. — Mahatma Gandhi",
    "Do not go where the path may lead, go instead where there is no path and leave a trail. — Ralph Waldo Emerson",
    "No man is free who is not master of himself. — Epictetus",
    "The most important thing is to enjoy your life—to be happy—it’s all that matters. — Audrey Hepburn",
    "If you wish to be rich, do not add to your money, but subtract from your desire. — Seneca",
    "Nothing in the world can trouble you as much as your own thoughts. — Marcus Aurelius",
    "He who has a why to live can bear almost any how. — Friedrich Nietzsche",
    "It is not length of life, but depth of life. — Ralph Waldo Emerson",
    "The quality of your life is determined by the quality of your thoughts. — Marcus Aurelius",
    "The universe is change; life is opinion. — Marcus Aurelius",
    "No one is free who is not master of themselves. — Epictetus",
    "Wealth consists not in having great possessions, but in having few wants. — Epictetus",
    "You have power over your mind, not outside events. Realize this, and you will find strength. — Marcus Aurelius",
    "Take things as they come. Don’t make them harder than they are. — Epictetus",
    "Do not spoil what you have by desiring what you don’t have. — Epicurus",
    "Everything we hear is an opinion, not a fact. Everything we see is a perspective, not the truth. — Marcus Aurelius",
    "If you are pained by any external thing, it is not this thing that disturbs you, but your own judgment about it. — Marcus Aurelius",
    "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. — Ralph Waldo Emerson",
    "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment. — Buddha",
    "The obstacle is the way. — Marcus Aurelius",
    "Time, as he went on, would reveal what he was. — Seneca",
    "The more a man knows, the more he will be amazed at his ignorance. — Confucius",
    "The greatest wealth is to live content with little. — Plato",
    "Gratitude is not only the greatest of virtues, but the parent of all the others. — Marcus Tullius Cicero",
    "You cannot swim for new horizons until you have courage to lose sight of the shore. — William Faulkner",
    "Do what you can, with what you have, where you are. — Theodore Roosevelt",
    "Life is really simple, but we insist on making it complicated. — Confucius",
    "Keep your friends close, but your enemies closer. — Sun Tzu",
    "Do not wait for leaders; do it alone, person to person. — Mother Teresa",
    "The only way to do great work is to love what you do. — Steve Jobs",
    "The more you know, the more you realize how much you don’t know. — Aristotle",
    "Amor Fati: Love your fate, which is in fact your life. — Friedrich Nietzsche",
    "Do not seek to be happy. Seek to be worthy of happiness. — Immanuel Kant",
    "Freedom is the only worthy goal in life. It is won by disregarding things that lie beyond our control. — Epictetus",
    "What we achieve inwardly will change outer reality. — Plutarch",
    "To be able to endure is the key to happiness. — Epictetus",
    "The greatest remedy for anger is delay. — Seneca",
    "It is not what happens to you, but how you react to it that matters. — Epictetus",
    "True love is a steady, unshakable choice. — Marcus Aurelius",
    "The unexamined life is not worth living. — Socrates",
    "Don’t waste your time on what you can’t control. — Epictetus",
    "He who is not a good servant will not be a good master. — Plato",
    "It’s not things that disturb us, but our opinions about them. — Epictetus",
    "The mind that is anxious about the future is miserable. — Seneca",
    "Life isn’t about finding yourself. Life is about creating yourself. — George Bernard Shaw",
    "Be content with what you have, rejoice in the way things are. — Lao Tzu",
    "The man who has planned wisely and acted accordingly will be satisfied with whatever happens. — Seneca",
    "Success is not how high you have climbed, but how you make a positive difference to the world. — Roy T. Bennett",
    "Let thy food be thy medicine and thy medicine be thy food. — Hippocrates",
    "It is not the strongest of the species that survive, nor the most intelligent, but the one most responsive to change. — Charles Darwin",
    "Fortune and misfortune are two faces of the same coin. — Marcus Aurelius",
    "Man is not worried by real problems so much as by his imagined anxieties about real problems. — Epictetus",
    "The obstacle is the way. — Marcus Aurelius",
    "Live with purpose, love with passion, and let joy be the result. — Marcus Aurelius",
    "What matters most is how well you walk through the fire. — Charles Bukowski",
    "Nothing is worth doing that is done without joy. — Seneca",
    "He who does not value life does not deserve it. — Leonardo da Vinci",
    "When you arise in the morning think of what a privilege it is to be alive, to think, to enjoy, to love... — Marcus Aurelius",
    "A good character can be shaped with the power of habit. — Aristotle",
    "When you have control over your thoughts, you have control over your actions. — Marcus Aurelius",
    "It is not that we have a short time to live, but that we waste a lot of it. — Seneca",
    "A wise man is one who knows what he does not know. — Socrates",
    "To love and be loved is to feel the sun from both sides. — David Viscott",
    "Happiness depends upon ourselves. — Aristotle",
    "Don't go where the path may lead, go instead where there is no path and leave a trail. — Ralph Waldo Emerson",
    "The best way to predict the future is to create it. — Abraham Lincoln",
    "If you want to improve, be content to be thought foolish and stupid. — Epictetus",
    "Let things flow as they will. What is meant to be will always find its way. — Marcus Aurelius",
    "Live each day as if your life had just begun. — Johann Wolfgang von Goethe",
    "The more you know, the more you realize how much you don’t know. — Aristotle",
    "Keep going, and don't be afraid to fail. — Mark Zuckerberg",
    "Success is not in what you have, but in who you are. — Bo Bennett",
    "You will not be punished for your anger, you will be punished by your anger. — Buddha",
    "What lies behind us and what lies before us are tiny matters compared to what lies within us. — Ralph Waldo Emerson",
    "Our life is what our thoughts make it. — Marcus Aurelius",
    "Time is what we want most but what we use worst. — William Penn",
    "The only way to deal with this life meaningfully is to find one’s passion, and pursue it wholeheartedly. — Marcus Aurelius",
    "The happiness of your life depends upon the quality of your thoughts. — Marcus Aurelius",
    "It’s not what happens to you, but how you react to it that matters. — Epictetus",
    "He who is brave is free. — Seneca",
    "Wealth consists not in having great possessions, but in having few wants. — Epictetus",
    "Sometimes even to live is an act of courage. — Seneca",
    "Don’t be pushed around by the fears in your mind. Be led by the dreams in your heart. — Roy T. Bennett",
    "What we cannot bear removes us from life; what remains can be borne. — Marcus Aurelius",
    "It’s not the years in your life that count, it’s the life in your years. — Abraham Lincoln",
    "The longer I live, the more I realize the impact of attitude on life. — Charles R. Swindoll",
    "Do not waste time on what you cannot change. — Epictetus",
    "The happiness of your life depends upon the quality of your thoughts. — Marcus Aurelius",
    "Keep yourself simple, ordinary, and modest. — Marcus Aurelius",
    "The only limit to our realization of tomorrow is our doubts of today. — Franklin D. Roosevelt",
    "Wealth consists not in having great possessions, but in having few wants. — Epictetus",
    "To bear trials with a quiet mind is the mark of a noble soul. — Seneca",
    "The more I know, the more I realize I know nothing. — Socrates",
    "He who has a why to live can bear almost any how. — Friedrich Nietzsche",
    "A great man is hard on himself; a small man is hard on others. — Confucius",
    "The good life is one inspired by love and guided by knowledge. — Bertrand Russell",
    "A man who has committed a mistake and doesn't correct it, is committing another mistake. — Confucius",
    "Time is what we want most, but what we use worst. — William Penn",
    "A person who won’t listen will not learn. — Epictetus",
    "Learn to be indifferent to what makes no difference. — Marcus Aurelius",
    "The man who has planned wisely and acted accordingly will be satisfied with whatever happens. — Seneca",
    "He who has a strong mind can weather any storm. — Epictetus",
    "Fortune and misfortune are two faces of the same coin. — Marcus Aurelius",
    "A man is but the product of his thoughts; what he thinks, he becomes. — Mahatma Gandhi",
    "What happens in life is not as important as what we make of it. — Epictetus",
    "Difficulties strengthen the mind, as labor does the body. — Seneca",
    "We are what we repeatedly do. Excellence, then, is not an act, but a habit. — Aristotle",
    "The wise man is one who knows that he is not wise. — Socrates",
    "A person is not given integrity. It results from the relentless pursuit of truth. — Epictetus",
    "Do what you can, with what you have, where you are. — Theodore Roosevelt",
    "Amor Fati: Embrace your fate, for it is your path. — Friedrich Nietzsche",
    "There is no remedy for love but to love more. — Henry David Thoreau",
    "A man’s life is what his thoughts make of it. — Marcus Aurelius",
    "The key to happiness is not in external circumstances but in how you choose to react to them. — Epictetus",
    "What we achieve inwardly will change outer reality. — Plutarch",
    "What you do is what matters, not what you think or say or plan. — Jason Fried",
    "The obstacle is the way. — Marcus Aurelius",
    "The greatest wealth is to live content with little. — Plato",
    "Don’t wait. The time will never be just right. — Napoleon Hill",
    "Happiness depends upon ourselves. — Aristotle",
    "An unexamined life is not worth living. — Socrates",
    "Freedom is the only worthy goal in life. It is won by disregarding things that lie beyond our control. — Epictetus",
    "It is not what happens to us, but how we respond to it that counts. — Epictetus",
    "A friend to all is a friend to none. — Aristotle",
    "The ultimate goal of life is to align our thoughts and actions to the highest virtues. — Epictetus",
    "He who is not a good servant will not be a good master. — Plato",
    "Do not squander time for that is the stuff life is made of. — Benjamin Franklin",
    "Wealth consists not in having great possessions, but in having few wants. — Epictetus",
    "Knowing others is intelligence; knowing yourself is true wisdom. — Lao Tzu",
    "Be patient and tough; someday this pain will be useful to you. — Ovid",
    "Do not spoil what you have by desiring what you do not have. — Epicurus",
    "Everything has its beauty, but not everyone sees it. — Confucius",
    "Keep your face always toward the sunshine—and shadows will fall behind you. — Walt Whitman",
    "Our life is what our thoughts make it. — Marcus Aurelius",
    "Life is what happens when you’re busy making other plans. — John Lennon",
    "Don't wait. The time will never be just right. — Napoleon Hill",
    "The greatest obstacle to living is expectancy, which hangs upon tomorrow and wastes today. — Seneca"  
  ];
  
  
  
  // Function to display the quote of the day
  function displayQuote() {
    const currentDate = new Date();
    const dayOfYear = Math.floor(
      (currentDate - new Date(currentDate.getFullYear(), 0, 0)) / 86400000
    ); // Calculates the day of the year
    const quote = stoicQuotes[dayOfYear % stoicQuotes.length]; // Ensure it loops if fewer quotes exist
    document.getElementById('quote').textContent = quote;
  }
  
  // Initial page load
  document.addEventListener('DOMContentLoaded', () => {
    const defaultZipCode = '65802'; // Replace with your desired default ZIP code
    fetchWeather(defaultZipCode);
    displayQuote();
  });
  