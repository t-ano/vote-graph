<script>
import { mapActions } from 'vuex';
import { Bar } from 'vue-chartjs';

export default {
  extends: Bar,
  watch: {
    questions: {
      handler() {
        this.makeChart();
      },
      deep: true
    }
  },
  mounted() {
    if (this.$store.state.questions.length === 0) this.fetchQuestions();
    this.makeChart();
  },
  data() {
    return {
      chartData: {
        contents: [],
        labels: null,
        datasets: [
          {
            label: 'Yes',
            data: null,
            borderWidth: 1,
            backgroundColor: '#ccffff'
          },
          {
            label: 'No',
            data: null,
            borderWidth: 1,
            backgroundColor: '#ffcccc'
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          xAxes: [{
            scaleLabel: {
              display: true,
              labelString: ''
            }
          }],
          yAxes: [{
            ticks: {
              beginAtZero: true,
              stepSize: 10,
            }
          }]
        }
      },
      questions: this.$store.state.questions,
    }
  },
  methods: {
    makeChart() {
      this.chartData.labels = [];
      let yes = [], no = [];
      this.$store.getters.getAnswers.forEach((answer, index) => {
        this.chartData.labels.push('No ' + (index + 1));
        yes.push(answer.yes);
        no.push(answer.no);
      });
      this.chartData.datasets[0].data = yes;
      this.chartData.datasets[1].data = no;

      this.renderChart(this.chartData, this.options);
    },
    ...mapActions(['fetchQuestions'])
  }
}
</script>